import { Box, Container, Typography, Paper, BottomNavigation } from "@mui/material";
import CustomizedAccordions from "../components/Accordian";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () => (
    <Container
        sx={{ width: 900 }}
    >
        <Typography variant="h3" components="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
            <img src="https://i0.wp.com/www.bladjar.com/wp-content/uploads/2021/07/Fakta-Informasi-Menarik-tentang-Las-Vegas-the-Sin-City.jpg?w=960&ssl=1" alt="" height={370} />
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant="h6" components="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" components="p" marginTop={3}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant="h6" components="h4" marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal />
            </BottomNavigation>
        </Paper>

    </Container>
)

export default Tour;