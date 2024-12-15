import { Welcome, Services, Transactions } from "../../components";



const Home = () => (
  <div className="min-h-screen">
    {/* <CryptoTable /> */}
    {/* <CryptoTable2/> */}
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Services />
    <Transactions />
  </div>
);

export default Home;