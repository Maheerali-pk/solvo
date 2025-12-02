import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";

function ContactUsPage() {
  return (
    <div className="w-full flex items-center bg-white relative  flex-col gap-section-spacing">
      {/* <div
        className="w-full h-full absolute -bottom-80 left-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(136, 216, 232, 0.2) 47.74%, rgba(136, 216, 232, 0.533333) 88.56%);",
        }}
      ></div> */}
      <Header></Header>
      <GetInTouch> </GetInTouch>

      <Footer></Footer>
    </div>
  );
}

export default ContactUsPage;
