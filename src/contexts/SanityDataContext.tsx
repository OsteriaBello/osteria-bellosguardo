import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { fetchAllSiteData } from '../lib/sanityQueries'
import type { SiteData } from '../types/sanity'

interface SanityDataContextType {
  data: SiteData | null
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

const defaultData: SiteData = {
  siteSettings: null,
  hero: null,
  foodMenu: [],
  drinksMenu: [],
  gallery: null,
  news: [],
  reviews: null,
  contact: null,
  footer: null,
  translations: null,
}

const SanityDataContext = createContext<SanityDataContextType>({
  data: null,
  loading: true,
  error: null,
  refresh: async () => {},
})

export const useSanityData = () => useContext(SanityDataContext)

interface Props {
  children: ReactNode
}

export const SanityDataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<SiteData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const result = await fetchAllSiteData()
      setData(result || defaultData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data')
      setData(defaultData)
    } finally {
      setLoading(false)
    }
  }

  const refresh = async () => {
    await loadData()
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <SanityDataContext.Provider value={{ data, loading, error, refresh }}>
      {children}
    </SanityDataContext.Provider>
  )
}