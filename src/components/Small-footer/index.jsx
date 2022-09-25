import { useRouter } from 'next/router'
import React from 'react'

const SmallFooter = () => {
  const router = useRouter()
    return (
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
                © 2022 Reserved by 
                <a onClick={() => router.push("/")}  style={{marginLeft: 5}}>Quickint Solutions</a>.
              </p>
            </div>
          </div>
        </footer>
    )
}

export default SmallFooter
