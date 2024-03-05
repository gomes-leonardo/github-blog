import React, { useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface ApiContextProps {
  children: React.ReactNode
}
interface IssueProps {
  title: string
  html_url: string
}

interface ProfileProps {
  avatar_url: string
  bio: string
  followers: string
  login: string
  company: string
  name: string
}

interface RepoProps {
  name: string
  description: string
  html_url: string
  updated_at: string
  issues: IssueProps[] | null
}

interface ApiContextType {
  getProfile: () => void
  getRepo: () => void
  searchProfile: (query?: string) => void
  user: ProfileProps | null
  repo: RepoProps[] | null
}
export function ApiContextProvider({ children }: ApiContextProps) {
  const [user, setUser] = useState<ProfileProps | null>(null)
  const [repo, setRepo] = useState<RepoProps[] | null>(null)

  useEffect(() => {
    getProfile()
    getRepo()
  }, [])
  async function getProfile() {
    const response = await api.get('/users/gomes-leonardo')
    setUser(response.data)
  }
  async function getRepo() {
    const response = await api.get('/users/gomes-leonardo/repos')
    setRepo(response.data)
  }

  async function searchProfile(query?: string) {
    if (!query) {
      await getProfile()
      await getRepo()
    } else {
      const response = await api.get(`/users/${query}`)
      setUser(response.data)

      const repoResponse = await api.get(`/users/${query}/repos`)
      setRepo(repoResponse.data)
    }
  }

  return (
    <ApiContext.Provider
      value={{ getProfile, getRepo, searchProfile, repo, user }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export const ApiContext = React.createContext({} as ApiContextType)
