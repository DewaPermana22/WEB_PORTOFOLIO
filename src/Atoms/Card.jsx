import { motion } from "framer-motion"
const Card = ({logo, alt, NamaBahasa}) => {
    return(
        <motion.div whileHover={{scale: 1.1,backgroundColor: '#6B21A8', color: '#ffffff'}} className="flex flex-col items-center gap-2 border-2 border-slate-50 p-5 w-[150px] h-auto rounded-lg shadow-lg bg-slate-50">
            <img src={logo} alt={alt}
            className="w-[60px] h-[60px]" />
            <h1 className="text-lg font-bold font-Signika">{NamaBahasa}</h1>            
        </motion.div>
    )
}

export default Card