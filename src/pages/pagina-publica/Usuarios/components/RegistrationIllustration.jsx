const RegistrationIllustration = () => {
    return (
      <div className="w-full lg:w-[45%] bg-blue-100 relative overflow-hidden py-16 px-4 sm:px-8 flex items-center justify-center">
        { }
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10">
          <img src="/logo-clinica.png" alt="Clínica Regional ICA" className="h-12 sm:h-32 w-38"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLecFyB71Pj1Uam50k8cJo_hgSm5FZ-ivnog&s"
            }}
          />
        </div>
  
        { }
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px]">
          { }
          <div className="absolute top-[10px] sm:top-[-20px] right-[30%] sm:right-[25%] z-10">
            <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-28 sm:h-32 md:h-36 lg:h-40">
              <div className="absolute inset-0 bg-blue-200 rounded-full shadow-md"></div>
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <img src="/person1.jpg" alt="Person" className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTym6TLorBx4-e681AL_VgHdxYMkFgZ0om0O6aoR_rt2EX0jix"
                  }}
                />
              </div>
            </div>
          </div>
  
          { }
          <div className="absolute top-[5%] sm:top-[2%] right-[10%] sm:right-[5%]">
            <svg className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-blue-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
            </svg>
          </div>
  
          { }
          <div className="absolute top-[40%] sm:top-[38%] md:top-[35%] left-[5%] sm:left-[8%] md:left-[10%] z-10">
            <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-28 sm:h-32 md:h-36 lg:h-40">
              <div className="absolute inset-0 bg-yellow-200 rounded-full shadow-md"></div>
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <img src="/person2.jpg" alt="Person" className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "https://us.123rf.com/450wm/pavlik18/pavlik182204/pavlik18220400007/184583127-chica-de-cerca-ilustraci%C3%B3n-de-vector-de-estilo-plano.jpg?ver=6"
                  }}
                />
              </div>
            </div>
          </div>
  
          { }
          <div className="absolute top-[35%] sm:top-[32%] md:top-[30%] left-[40%] sm:left-[42%] md:left-[45%]">
            <svg className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-blue-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
            </svg>
          </div>
  
          { }
          <div className="absolute bottom-[10%] sm:bottom-[8%] md:bottom-[5%] right-[30%] sm:right-[25%] md:right-[20%] z-10">
            <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-28 sm:h-32 md:h-36 lg:h-40">
              <div className="absolute inset-0 bg-yellow-200 rounded-full shadow-md"></div>
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <img src="/person3.jpg" alt="Person" className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "https://img.freepik.com/vector-premium/hombre-feliz-sonriente_198838-270.jpg"
                  }}
                />
              </div>
            </div>
          </div>
  
          { }
          <div className="absolute bottom-[15%] sm:bottom-[12%] md:bottom-[10%] right-[5%] sm:right-[2%] md:right-[0%]">
            <svg className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-blue-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
  
  export default RegistrationIllustration