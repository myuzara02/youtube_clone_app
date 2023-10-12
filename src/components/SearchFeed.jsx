import { useEffect, useState } from "react"
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { useParams } from "react-router-dom"

import { fetchFromAPI } from "../utils/fetchFromAPI"



const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerms } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerms}`)
      .then((data) => setVideos(data.items))
  }, [searchTerms])


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }} >
      <Typography
        variant="h4"
        sx={{ color: 'white' }}
        mb={2}
        fontWeight={'bold'}
      >
        Search Result for : <span style={{ color: '#F31503' }}> {searchTerms} Videos </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed