import { SvgIcon } from "@mui/material";
import BrushIcon from '@mui/icons-material/Brush';
import PublicIcon from '@mui/icons-material/Public';
import WatchIcon from '@mui/icons-material/Watch';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

interface ICard {
  icon: any,
  title: string,
  descText: string,
}

const PropertyCard = ({icon = "", title, descText}: ICard) => {
  const Styles = {
    card: `
      flex 
      flex-col
      h-60
      w-80
      border-slate-800
      p-4
      rounded-md
      shadow-xl
    `,
    icon: `
    `,
    title: `
      pl-2
      text-2xl
    `,
    description: `
      pt-2
      pl-2
    `
  }
  return (
    <div className={Styles.card}>
      <div className="flex items-center">
        <SvgIcon component={icon} className={Styles.icon}/>
        <h3 className={Styles.title}>{title}</h3>
      </div>
      <hr />
      <p className={Styles.description}>{descText}</p>
    </div>
  )
}

const Properties = () => {
  const Styles = {
    container: `
      flex 
      gap-6
      px-12
      py-12
      justify-center
    `,
  }
  return (
    <div className={Styles.container}>
      <PropertyCard icon={BrushIcon} title="Artesanal" descText="Un carro Tuti es artesanal"/>
      <PropertyCard icon={PublicIcon} title="Nacional" descText="Un carro Tuti es hecho en Colombia"/>
      <PropertyCard icon={WatchIcon} title="Elegante" descText="Un carro tuti es elegante"/>
      <PropertyCard icon={AccessibilityNewIcon} title="Unico" descText="Un carro Tuti es distintivo"/>
    </div>
  )
}

export default Properties;
