import Image from "next/image";
import DelieveryPartnerImage from "@/public/delieveryPartnerTransparent.png";
function LandingPage() {
  return (
    <>
      <div className="bg-yellow-300 md:flex  relative">
        <article className="bg-pink-400 basis-[40%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          accusamus quos qui magni facilis quam ex quod numquam tenetur
          doloremque quas dignissimos, quasi beatae sunt earum inventore. Unde,
          similique molestias? Iure quis dolorem mollitia soluta ducimus,
          distinctio voluptas nobis! Magnam distinctio ex est. Maiores, voluptas
          velit illum suscipit ab perferendis asperiores eos facilis soluta
          aliquid accusantium doloribus ullam ut vero? Reprehenderit, recusandae
          sit
        </article>
        <div>
        <Image
          src={DelieveryPartnerImage}
          className="bg-red-500 min-h-[50%] w-[100%] object-contain md:h-[30%]"
        />
        </div>
        
      </div>
    </>
  );
}

export default LandingPage;
