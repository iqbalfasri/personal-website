import React, { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const ProjectsPage = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  /**
   * Retrieve my all repositories
   */
  useEffect(() => {
    const fetchRepos = async () => {
      const fetch = await axios.get("https://api.github.com/users/iqbalfasri/repos")
      const getRepos = fetch.data

      setRepos(getRepos)
      setLoading(false)
    }

    fetchRepos()
  }, [])

  /**
   * Mapping data
   */
  // repos.map(r => console.log(r['name'], r['description']))

  return (
    <div>
      <h1>{loading ? "Loading" : "ProjectsPage"}</h1>
    </div>
  )
}

export default ProjectsPage
