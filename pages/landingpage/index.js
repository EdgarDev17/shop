import { ButtonSolid } from "../../components/Button";
import { Card } from "../../components/Card";
import { products } from "./fakeProducts";
import AppContainer from "../index";

const consumeFakeAPi = () => {
    return products.map(product => {
        return (<Card key={product.id} cardSize={'large'} image={product.imageUrl} title={product.name} price={product.price}
            sizes={product.sizes.toString()} />)
    })
}

const LandingPage = (props) => {
    return (
        <AppContainer>
            <div>
                {/*Seccion de ofertas*/}
                <div className={'text-7xl font-bold absolute top-1/4 left-3/4'}>
                    <h2>SALE</h2>
                    <h2 className={'text-xl my-5'}>up to</h2>
                    <h2>50%</h2>

                    <div className={'w-56 text-lg mt-5'}>
                        <ButtonSolid label={'Mirar Ofertas'} variant={'primary'} />
                    </div>

                </div>

                <img className={'w-full h-full'}
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="" />
            </div>

            <div className={'contentDiv w-full'}>
                <div className={'flex flex-wrap  justify-center items-center'}>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'my-10 text-5xl font-bold font-Poppins'}>Mira nuestra nueva coleccion</h2>
                        <button
                            className={'py-5 px-16 text-white bg-black rounded hover:bg-green-500 hover:font-bold'}>CONOCER
                            MAS
                        </button>

                    </div>

                    <img className={''}
                        src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="" />
                </div>
                <div className="container mx-auto my-10">
                    <h2 className={'ml-36 my-10 text-3xl font-bold font-Poppins'}>Productos mas vendidos</h2>

                    <div className="grid grid-cols-3 gap-5">
                        {consumeFakeAPi()}
                    </div>
                </div>
            </div>
        </AppContainer>
    )
}

export default LandingPage