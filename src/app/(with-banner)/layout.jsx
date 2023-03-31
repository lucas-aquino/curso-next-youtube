export default function BannerLayout({ children }){
  return(
    <>
      <div>
        <marquee style={{
          background: 'purple', 
          color: '#fff',
          'user-select': 'none'
        }}>
          lucas-aquino el mejor dev del mundo c: y el que diga lo contrario que me la chupe {'>'}:c
        </marquee>
      </div>
      {children}
    </>
  )
}