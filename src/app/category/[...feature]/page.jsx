export default async function categoryFeaPage({ params }) {
    const { feature } = await params
    console.log('params is ' , {feature});
    console.log(feature.length);
    if (feature.length == 3) return <div>{feature[2]}</div>
    if (feature.length == 2) return <div>{feature[1]}</div>
    return <div>My Post: {feature}</div>
  }

  //Since the params prop is a promise. we must use async/await or React's use function to access the values.