export default function LogoWatermark() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03]">
        <div className="text-[20rem] font-bold leading-none" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>
          <div className="text-cmq-gray-darker">CMQ</div>
        </div>
      </div>
    </div>
  )
}