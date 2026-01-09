'use client'
import { AppBar, Box, Button, Container, IconButton, Menu, MenuIcon, MenuItem, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
    const router = useRouter()

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        

        if(id === "about") {
            element?.scrollIntoView({ behavior: "smooth", block: 'center'});
        } else {
            element?.scrollIntoView({ behavior: "smooth", block: 'start'});
        }
    };
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#005461',  border: "none"}} component="nav">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between"}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        paddingLeft: '10px',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Nathan Romphf
                    </Typography>
                    <Box sx={{display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={{ my: 2, color: '#c7fbfe', display: 'block' }} onClick={() =>scrollToSection("about")}>About</Button>
                        <Button sx={{ my: 2, color: '#c7fbfe', display: 'block' }} onClick={() =>scrollToSection("projects")}>Projects</Button>
                        <Button sx={{ my: 2, color: '#c7fbfe', display: 'block' }} onClick={() =>scrollToSection("technologies")}>Technologies</Button>
                        <Button sx={{ my: 2, color: '#c7fbfe', display: 'block' }} onClick={() =>scrollToSection("contact")}>Contact</Button>
                        <Button sx={{ my: 2, color: '#c7fbfe', display: 'block' }} onClick={() => window.open('https://github.com/NattyCodes')}><FaGithub size={30} /></Button>
                        <Button sx={{ my: 2, color: '#c7fbfe', display: 'block' }} onClick={() => window.open('https://www.linkedin.com/in/nathan-romphf-9570b9235/')}><FaLinkedin size={30} /></Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}