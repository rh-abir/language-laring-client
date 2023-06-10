import Container from "../../../compnents/Container/Container";
import Carousel from "../Carousel/Carousel";
import PopularClasses from "../PopularClasses/PopularClasses";
import StudentSays from "../StudentSays/StudentSays";



const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
            <Container>
                <StudentSays></StudentSays>
            </Container>
        </div>
    );
};

export default Home;