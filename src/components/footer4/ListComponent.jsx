import styles from "@/components/footer4/ListComponent.module.css"
export default function ListComponent({btnText}){
    return(
        <>
        <button className={styles.btn}>
         {btnText}
        </button>
        </>
    )
}