import Filosofi from 'components/Filosofi/Filosofi';
import Header from 'components/Header/Header';
import Tagar from 'components/Tagar/Tagar';
import VisiMisi from 'components/VisiMisi/VisiMisi';
import './HomePage.css';


export default function HomePage() {
    return (
        <div>
            <Header />
            <div className="HomePage">
                <Filosofi />
                <Tagar />
                <VisiMisi />
            </div>
        </div>
    )
}