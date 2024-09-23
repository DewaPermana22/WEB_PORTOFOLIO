import { motion } from "framer-motion"
const Card = ({logo, ukuran, warna, NamaBahasa,logo1}) => {
    return(
        <motion.div whileHover={{scale: 1.1,backgroundColor: '#6B21A8', color: '#ffffff'}} className="flex flex-col items-center gap-2 border-2 border-slate-50 p-5 w-[150px] h-auto rounded-lg shadow-lg bg-slate-50">
            <h1 className={`${ukuran} ${warna}`}>{logo}</h1>
            <img src={logo1} className="w-[60px] h-[60px]" alt="" />
            <h1 className="text-lg font-bold font-Signika">{NamaBahasa}</h1>            
        </motion.div>
    )
}

export default Card