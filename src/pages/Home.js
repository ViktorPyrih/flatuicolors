import './Home.css';
import Palette from "../components/Palette";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TransitionProvider from "../components/animation/TransitionProvider";

function Home({pallets}) {
    return (
        <TransitionProvider render={
            onClick =>
                    <div className="img-background">
                        <Header/>
                        <section className="pallet-container wrapper">
                            {
                                pallets
                                    .map((pallet, i) => <Palette pallet={pallet} key={i}
                                                            onClick={e => onClick(e, `/palette/${pallet.id}`)}/>)
                            }
                        </section>
                        <Footer/>
                    </div>
            }>
        </TransitionProvider>
    );
}

export default Home;
