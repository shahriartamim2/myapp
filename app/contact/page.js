import Script from 'next/script'
const contact = () => {
  return (
    <div>

      <Script id='my-script'>
        {`
        alert("hello from contact page");
      `}
      </Script>

      i am contact page

    </div>
  )
}

export default contact


export const metadata = {
  title: "title from contact page",
  description: "description from contact page",
};