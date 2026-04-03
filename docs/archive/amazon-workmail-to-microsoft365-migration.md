# Amazon WorkMail to Microsoft 365 Migration Guide

*Created: December 22, 2025*

## Before You Start - Important Notes

- **IMAP migration only moves emails** - contacts and calendars must be exported separately
- **Don't delete Amazon WorkMail** until you've verified everything is in Microsoft 365
- **Plan for 2-3 days** of overlap to ensure nothing is lost
- Your domain is `cmqheadshots.com` (managed in Route 53)

---

## Phase 1: Preparation (Do This First)

### Step 1: Get Your Microsoft 365 Subscription
1. Go to [Microsoft 365 Business](https://www.microsoft.com/en-us/microsoft-365/business)
2. Choose a plan (Business Basic is fine for email only, ~$6/month per user)
3. Click "Buy Now" or "Try free for 1 month"
4. When asked for a domain, **use Microsoft's free temporary domain**:
   - Choose something like `cmqheadshots.onmicrosoft.com`
   - This creates a temporary admin account like `cindy@cmqheadshots.onmicrosoft.com`
   - You'll use this to log into the admin center
5. **Don't add your real domain (cmqheadshots.com) yet** - we'll do that in Step 5

### Step 2: Document Your Amazon WorkMail Settings
Your actual WorkMail settings:

**Incoming Mail (IMAP):**
- **Server:** `imap.mail.us-east-1.awsapps.com`
- **Port:** 993
- **Security:** SSL enabled

**Outgoing Mail (SMTP):**
- **Server:** `smtp.mail.us-east-1.awsapps.com`
- **Port:** 465
- **Security:** SSL enabled

**Credentials:**
- **Username:** `cindy` (or try `cindy@cmqheadshots.com` if needed)
- **Password:** Your WorkMail password

### Step 3: Lower DNS TTL (Do 48 Hours Before Migration)
1. Go to **Route 53** → **Hosted zones** → **cmqheadshots.com**
2. Find your **MX record** (mail exchange)
3. Edit and change TTL to **300** (5 minutes) - this makes the DNS switch faster later
4. Do the same for any TXT records related to email (SPF, DKIM)

### Step 4: Backup Your Contacts & Calendar
Since IMAP doesn't migrate these:
1. Log into Amazon WorkMail web interface
2. Export contacts to CSV file
3. Export calendar to ICS file
4. Save these files safely

---

## Phase 2: Set Up Microsoft 365

### Step 5: Add Your Domain to Microsoft 365
1. Go to [Microsoft 365 Admin Center](https://admin.microsoft.com)
2. **Settings** → **Domains** → **Add domain**
3. Enter `cmqheadshots.com`
4. Microsoft will give you a TXT record to add to Route 53 for verification
5. Add the TXT record in Route 53, wait for verification
6. **IMPORTANT:** When asked about DNS records, choose "I'll manage my own DNS"
7. **DO NOT update MX records yet** - skip this step for now

### Step 6: Create User Mailboxes in Microsoft 365
1. In Admin Center → **Users** → **Active users**
2. Create a user for each email address you're migrating
3. Assign Microsoft 365 licenses to each user
4. Note down the temporary passwords

---

## Phase 3: Migrate Your Emails

### Step 7: Set Up IMAP Migration in Microsoft 365
1. Go to [Exchange Admin Center](https://admin.exchange.microsoft.com)
2. **Migration** → **Add migration batch**
3. Select **Migration to Exchange Online**
4. Select **IMAP migration**
5. Enter your Amazon WorkMail IMAP settings:
   - Server: `imap.mail.us-east-1.awsapps.com`
   - Port: 993
   - Encryption: SSL
6. Create a CSV file with your mailboxes:
   ```
   EmailAddress,UserName,Password
   cindy@cmqheadshots.com,cindy@cmqheadshots.com,YourWorkMailPassword
   ```
7. Upload the CSV and start the migration batch

### Step 8: Wait for Initial Sync
- Microsoft will copy all your emails from WorkMail to Microsoft 365
- This can take hours depending on mailbox size
- Check the migration status in Exchange Admin Center
- Status should show "Synced" when complete

---

## Phase 4: The Cutover (Switch Day)

### Step 9: Final Sync
1. In Exchange Admin Center → Migration
2. Select your migration batch
3. Click **Complete migration batch** - this does a final sync

### Step 10: Update DNS Records in Route 53
1. Go to **Route 53** → **cmqheadshots.com**
2. **Delete** the old Amazon WorkMail MX record
3. **Add** the Microsoft 365 MX record:
   - Type: MX
   - Name: (leave blank or @)
   - Value: `cmqheadshots-com.mail.protection.outlook.com`
   - Priority: 0
4. **Update SPF record** (TXT record):
   - Value: `v=spf1 include:spf.protection.outlook.com -all`
5. Add **Microsoft 365 DKIM records** (from admin center)
6. Update **DMARC record** if you have one

### Step 11: Wait for DNS Propagation
- Can take up to 48 hours (usually faster with low TTL)
- Test by sending emails to yourself from Gmail or another external account
- Once emails arrive in Microsoft 365, you're live!

---

## Phase 5: Post-Migration

### Step 12: Import Contacts & Calendar
1. Log into [Outlook Web](https://outlook.office.com)
2. **People** → Import contacts from CSV
3. **Calendar** → Import calendar from ICS file

### Step 13: Set Up Email Clients
Update Outlook, iPhone, etc. with new settings:
- **Server:** outlook.office365.com
- **Port:** 993 (IMAP) or use Exchange/Microsoft 365 account type
- Or just sign in with your Microsoft 365 account

### Step 14: Verify Everything Works
- [ ] Can send emails
- [ ] Can receive emails
- [ ] Old emails are all there
- [ ] Contacts imported
- [ ] Calendar imported
- [ ] Email clients working

### Step 15: Keep WorkMail Active (2 Weeks)
- Don't cancel Amazon WorkMail immediately
- Keep it for 2 weeks as a safety net
- After confirming everything works, you can cancel WorkMail

---

## Timeline Summary

| Day | Task |
|-----|------|
| Day 1 | Lower DNS TTL, sign up for Microsoft 365, backup contacts/calendar |
| Day 2 | Add domain, create users, start IMAP migration |
| Day 3-4 | Wait for email sync to complete |
| Day 5 | Do final sync, update DNS records (cutover) |
| Day 5-7 | Monitor, test, import contacts/calendar |
| Day 14+ | Cancel Amazon WorkMail |

---

## Sources

- [Microsoft IMAP Migration Guide](https://learn.microsoft.com/en-us/exchange/mailbox-migration/migrating-imap-mailboxes/migrate-other-types-of-imap-mailboxes)
- [Amazon WorkMail IMAP Settings](https://docs.aws.amazon.com/workmail/latest/userguide/using_IMAP.html)
- [Microsoft DNS Migration Guide](https://learn.microsoft.com/en-us/archive/blogs/uktechnet/dns-the-key-to-a-successful-office-365-migration)
- [Microsoft Cutover Migration Info](https://learn.microsoft.com/en-us/exchange/mailbox-migration/what-to-know-about-a-cutover-migration)
