
function Footer() {
  return (
    <footer className="w-full">
      {/* Hero Section */}
      <div className="bg-[#E50914] px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-2xl">
            Gain Access to unlimited movies, TV shows, and more.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white/20 text-white py-3 pl-1 placeholder:text-white/70 border-white/30"
            />
            <button className="bg-black text-white hover:bg-black/90 px-8">GET STARTED</button>
          </div>
        </div>
      </div>


      <div className="bg-black text-white px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            NETFLIX
            
            <p className="text-gray-400 mt-2">© Netflix Nigeria</p>
            <p className="text-gray-400 mt-2">Himanshu Jaglyan</p>
          </div>

          {/* Language Selector */}
          <div className="mb-8">
            <button variant="outline" className="text-white border-white/30 hover:bg-white/10">
              {/* <Globe className="mr-2 h-4 w-4" /> */}
              English
            </button>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-medium mb-4">EXPLORE</h3>
              <ul className="space-y-3">
                <li>
                 
                </li>
                <li>
                    Account
                  
                </li>
                <li>
                    Ways to Watch
                  
                </li>
                <li>
                  Only on Netflix
                  
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-medium mb-4">LEGAL</h3>
              <ul className="space-y-3">
                <li>
                  
                    Cookie Preferences
                 
                </li>
                <li>
                    Privacy Policy
                </li>
                <li>
                    Terms of Use
                </li>
                <li>
                    Gift Card Terms
                </li>
                <li>
                    Legal Notices
                </li>
                <li>
                    Corporate Information
                  
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-medium mb-4">SUPPORT</h3>
              <ul className="space-y-3">
                <li>
                    FAQ
                  
                </li>
                <li>
                  
                    Speed Test
                  
                </li>
                <li>
                 
                    Contact Us
                 
                </li>
                <li>
                 
                    Jobs
                  
                </li>
                <li>
                 
                    Media Center
                  
                </li>
                <li>
                 
                    Investor Relations
                
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
