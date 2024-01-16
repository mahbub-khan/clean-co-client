import Container from "../components/ui/Container";
import IntroImg from "../assets/images/intro.jpg";

const Home = () => {
  return (
    <Container>
      <div className="flex gap-5 my-20">
        <div className="flex-[1] flex flex-col justify-between">
          <h1 className="text-7xl font-bold">Quality cleaning for Your Home</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error
            dolore harum. Nihil iste obcaecati explicabo tenetur totam!
            Repudiandae cum pariatur sunt alias odit illo obcaecati nostrum
            quisquam sequi.
          </p>
          <div className="divider"></div>
          <div>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1] h-[600px] rounded-md overflow-hidden">
          <img src={IntroImg} className="w-full h-full object-cover" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
