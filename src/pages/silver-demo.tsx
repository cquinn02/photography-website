import React from 'react';

export default function SilverDemo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Shiny Silver Style Examples
        </h1>

        <div className="grid gap-8 max-w-4xl mx-auto">
          
          {/* Example 1: Gradient Silver */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Gradient Silver</h2>
            <div className="space-y-4">
              {/* Button example */}
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #ffffff 50%, #e9ecef 75%, #dee2e6 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Gradient Silver Button
              </button>
              
              {/* Badge example */}
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #ffffff 50%, #e9ecef 75%, #dee2e6 100%)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                Silver Badge
              </div>

              {/* Card accent */}
              <div 
                className="p-4 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #ffffff 50%, #e9ecef 75%, #dee2e6 100%)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <p className="text-gray-700">Card with gradient silver background</p>
              </div>
            </div>
          </div>

          {/* Example 2: Metallic Silver with Shadow */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Metallic Silver with Shadow</h2>
            <div className="space-y-4">
              {/* Button example */}
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(145deg, #f1f3f4, #d1d5db)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                Metallic Silver Button
              </button>
              
              {/* Badge example */}
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                style={{
                  background: 'linear-gradient(145deg, #f1f3f4, #d1d5db)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                Metallic Badge
              </div>

              {/* Card accent */}
              <div 
                className="p-4 rounded-lg"
                style={{
                  background: 'linear-gradient(145deg, #f1f3f4, #d1d5db)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                <p className="text-gray-700">Card with metallic silver background</p>
              </div>
            </div>
          </div>

          {/* Example 3: Chrome-like Silver */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Chrome-like Silver</h2>
            <div className="space-y-4">
              {/* Button example */}
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 20%, #e0e0e0 50%, #d0d0d0 80%, #c0c0c0 100%)',
                  border: '1px solid #bbb',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Chrome Silver Button
              </button>
              
              {/* Badge example */}
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 20%, #e0e0e0 50%, #d0d0d0 80%, #c0c0c0 100%)',
                  border: '1px solid #bbb',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                Chrome Badge
              </div>

              {/* Card accent */}
              <div 
                className="p-4 rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 20%, #e0e0e0 50%, #d0d0d0 80%, #c0c0c0 100%)',
                  border: '1px solid #bbb',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <p className="text-gray-700">Card with chrome silver background</p>
              </div>
            </div>
          </div>

          {/* Example 4: Animated Shimmer Silver */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Animated Shimmer Silver</h2>
            <div className="space-y-4">
              {/* Button example */}
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 transition-all hover:scale-105 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #e9ecef, #f8f9fa, #e9ecef)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                    animation: 'shimmer 2s infinite'
                  }}
                />
                Shimmer Silver Button
              </button>
              
              {/* Badge example */}
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium text-gray-700 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #e9ecef, #f8f9fa, #e9ecef)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                    animation: 'shimmer 2s infinite'
                  }}
                />
                Shimmer Badge
              </div>
            </div>
          </div>

          {/* Example 5: Matte Silver */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Matte Silver</h2>
            <div className="space-y-4">
              {/* Button example */}
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 transition-all hover:scale-105"
                style={{
                  backgroundColor: '#e5e7eb',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  border: '1px solid #d1d5db'
                }}
              >
                Matte Silver Button
              </button>
              
              {/* Badge example */}
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                style={{
                  backgroundColor: '#e5e7eb',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  border: '1px solid #d1d5db'
                }}
              >
                Matte Badge
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CSS Animation for shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}