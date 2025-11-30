export default function Footer(){
  const hour=new Date().getHours();
  const openingHour=8;
  const closingHour=20;
  const isOpen= hour>=openingHour && hour<closingHour;

  return(
    <footer>
      {/* {
        isOpen && (
          <p>Akşam {closingHour}'a kadar sipariş verebilirisniz.</p>
        ) */
        isOpen ? (
          <p>Akşam {closingHour}'a kadar sipariş verebilirisniz.</p>
        ):
        (<p>Şu an Kapalıyız.Açılış saatimiz {openingHour}.</p>)
      }
    </footer>
  )
}