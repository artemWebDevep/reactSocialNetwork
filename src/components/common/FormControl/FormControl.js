import React from "react";
import styles from "./FormControl.module.css"

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl  {...props}><input  {...input} {...restProps}></input></FormControl>
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

