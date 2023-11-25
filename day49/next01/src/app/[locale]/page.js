// "use client"
import "@/app/assets/Style.css"
import { useRouter } from 'next/navigation'
import { useTranslations } from "next-intl"
// import Link from "next/link";
// import Link from "next-intl/link";
// import Link from 'next/link';
import { Link } from "@/navigation";
import Button from "@/components/Button";
export default function Home() {

  // const router = useRouter();
  const translations = useTranslations("home");
  // const handleChange = (language) => {
  //   router.push(`/${language}`);
  // }
  
  console.log(translations("name"));
  return (
    <div>
      {/* <h1></h1>

       */}
      <header>
        <p>{ translations("name")}</p>
        <div className="link">
          <p>F8</p>
          <p>Facebook</p>
          <p>Github</p>
          <Link href="/" locale="en"  >
          English
        </Link>
          <Link href="/" locale="vi">
          Vi
          </Link>
        <Button> </Button>
          {/* <p>Vi</p> */}
        </div>
      </header>

      <main>
        
        <h1>{ translations("name")}</h1>
        <div className="container">
          <div className="inner-left">
          <div>
            <img src="https://picsum.photos/300/300" alt="error" />
            <p>Front-end Development</p>
          </div>
          <div>
            <div>
              <h2>{ translations("skill-title")}</h2>
              <p>{ translations("skill-work")}</p>
              <p>{ translations("skill-other")}</p>
              <hr />
              <h2>{ translations("history")}</h2>
              <p>{ translations("history-part")}</p>
              <hr />
              <p>{ translations("history-part")}</p>
              <hr />
              <p>{ translations("history-part")}</p>
              <hr />
              <p>{ translations("history-part")}</p>
              <hr />
            </div>     
          </div>
        </div>
        <div className="inner-right">
          <div>
            <h2>{ translations("contact")}</h2>
            <p>Phone</p>
            <p>Zalo</p>
            <p>Email</p>
            <p>Facebook </p>
            <p>Github</p>
            <hr />
          </div>
             <div>
            <h2>{ translations("project")}</h2>
            <h3>{ translations("title-project")}</h3>
            <p>{ translations("day-project")} </p>
            <button className="demo">Demo</button>
            <button className="code">Code</button>
            <hr />
          </div>
             <div>
          
            <h3>{ translations("title-project")}</h3>
            <p>{ translations("day-project")} </p>
            <button className="demo">Demo</button>
            <button className="code">Code</button>
            <hr />
          </div>
             <div>
            
           <h3>{ translations("title-project")}</h3>
            <p>{ translations("day-project")} </p>
            <button className="demo">Demo</button>
            <button className="code">Code</button>
            <hr />
          </div>
        </div>
        </div>
        
      </main>
    </div>
  )
}
