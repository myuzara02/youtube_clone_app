import { useState } from "react"
import { Paper, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerms, setSearchTerms] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (searchTerms) {
            e.preventDefault();
            navigate(`search/${searchTerms}`)

            setSearchTerms('')
        }
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                mr: { sm: 2 },
                boxShadow: 'none'
            }}
        >
            <input
                className="search-bar"
                placeholder="Search . . ."
                value={searchTerms}
                onChange={(e) => { setSearchTerms(e.target.value) }}
            />
            <IconButton
                type="submit"
                sx={{ p: "10px", color: 'red' }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar