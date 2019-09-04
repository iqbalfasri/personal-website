import React, { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/LayoutComponent"
import Seo from "../components/SeoComponent"
import {
  DisplayCardRepos,
  LoadMore,
  ProjectHeader as Header,
} from "../components/ProjectComponent"

const ProjectsPage = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [limitRepo, setlimitRepo] = useState(6)

  // Retrieve my all repositories
  useEffect(() => {
    const fetchRepos = async () => {
      const fetch = await axios.get(
        "https://api.github.com/users/iqbalfasri/repos"
      )
      const getRepos = fetch.data

      setRepos(getRepos)
      setLoading(false)
    }

    fetchRepos()
  }, [])

  // Limit data to display repository
  const reposLimit = repos.slice(0, limitRepo)

  // Handle button to load more data repository
  const handleLoadMore = () => {
    setlimitRepo(limitRepo + 3)
  }

  return (
    <Layout>
      <Seo title="Projects" />
      <Header>
        <h1>Project Page</h1>
      </Header>
      <div className="container">
        <DisplayCardRepos repositories={reposLimit} />
        <LoadMore
          onClick={handleLoadMore}
          text="Load more"
          loading={loading.toString()}
        />
      </div>
    </Layout>
  )
}

export default ProjectsPage
