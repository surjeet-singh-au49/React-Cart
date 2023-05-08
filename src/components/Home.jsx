import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

    const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260"

  const img3 = "https://rukminim1.flixcart.com/image/832/832/kckud8w0/regionalbooks/e/w/m/the-secret-original-imaftz2dtzdk3tbm.jpeg?q=70"

  const img4 = "https://rukminim1.flixcart.com/image/832/832/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70"

  const img5 = "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/q/2/i/m-s-r-b-w-farbot-original-imagjuxy9kn5qyam.jpeg?q=70"


    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: img1,
            id: "asdadeerada"
        },
        {
            name: "Black Shoes",
            price: 400,
            imgSrc: img2,
            id: "asdadeadassaerada"
        },
        {
            name: "The Secret - Book by Rhonda Byrne",
            price: 20,
            imgSrc: img3,
            id: "asdadeadassaera"
        },
        {
            name: "Apple Iphone 12 Pro",
            price: 699,
            imgSrc: img4,
            id: "asdadeadassaerafrr"
        },
        {
            name: "Black Men T-Shirt",
            price: 8,
            imgSrc: img5,
            id: "asdadeadassaerafrrfgg"
        }

    ];


    const dispatch = useDispatch()

    const addToCartHandler = (options) => {

        console.log(options);
        toast.success("Added to Cart")

        dispatch({type: "addToCart", payload: options})

        dispatch({ type:"calculatePrice"})


    }

  return (
    <div className='home'>

        {
            productList.map(i => (
                <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler}/>
            ))
        }
    </div>
  )
}


const ProductCard = ({name, id, price, handler, imgSrc}) => (

    <div className='productCard'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({name, price, id, quantity: 1, imgSrc})}>Add to Cart</button>
    </div>

)

export default Home