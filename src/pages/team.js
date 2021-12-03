import React from "react"
import Layout from "../components/Layout/Layout"
import "./team.css"
import { Link } from "gatsby"
import sig4 from "../assets/sig4.svg"
import Samuel from "../assets/Samuel.png"
import Lolade from "../assets/Lolade.png"
import Dayo from "../assets/Dayo.png"
import Maeba from "../assets/Maeba.png"
import Esther from "../assets/Esther.png"
import Anita from "../assets/Anita.png"
import Ope from "../assets/Ope.png"
import Placeholder from "../assets/imagePlaceholder.png"

export default function team() {
  return (
    <Layout>
      <div className="max-w-6xl container mx-auto px-4 my-10 mb-64">
        <div className="">
          <h1 className="header-text-width text-2xl sm:text-5xl font-Gilroy font-normal leading-10">
            {" "}
            This entire project was brought to life by a well diverse team of
            developers and product designers.{" "}
          </h1>
          <div className="flex justify-end">
            <img src={sig4} alt="" />
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Samuel} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Akintunde Samuel</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Project Manager</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Lolade} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Ololade Adeyemi-Adesuyi</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Dayo} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Dayo Awobeku</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Maeba} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Maeba Beete</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Esther} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Esther Mobolaku</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Anita} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Anita Mudiaga</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Placeholder} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Stephen Oba</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Backend Engineer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Placeholder} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Douglas Okolaa</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Backend Engineer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Placeholder} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Emmanuel Olu-Flourish</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Mobile Developer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Placeholder} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Ayo Apantaku</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Frontend Engineer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 mx-auto sm:ml-0">
                <div className="mx-auto sm:ml-0">
                  <img className="w-32 h-32" src={Ope} alt="" />
                </div>
                <div className="flex flex-col sm:flex-row mt-5 sm:mt-5 mx-auto text-center">
                  <h1 className="text-2xl">Siyanbola Opeoluwa</h1>
                  <div className="flex items-center mx-auto">
                    <span className="text-green-600 text-xl mx-1">•</span>
                    <p className="text-sm text-gray-600">Frontend Engineer</p>
                  </div>
                </div>
                <div className="flex text-sm text-gray-400 space-x-3 mx-auto sm:-ml-0 sm:mt-3">
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Twitter
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        LinkedIn
                      </p>
                    </Link>
                  </button>
                  <button>
                    <Link to="http://linkedin.com">
                      <p className="border-transparent border-b hover:border-gray-400 hover:text-gray-400 text-sm">
                        Instagram
                      </p>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
