import {TextField, Button, Stack} from "@mui/material";
import {useForm} from "react-hook-form";
import {DevTool} from '@hookform/devtools'
type FormValues={
    email:string
    password: string
}
export const MuiLoginForm = ()=> {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const {
        register, handleSubmit,
        formState, control
    } = form;
    const {errors} = formState;

    const onSubmit = (data: FormValues) => {
        console.log(data);
    }
    return (<>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2} width={400}>
                <TextField label="Email" type="Email"{...register("email", {
                    required: "Email is required"

                })}
                           error={!!errors.email}
                           helperText={errors.email?.message}
                />

                <TextField label="Password" type="Password" {...register("password", {
                    required: "Password is required",
                })}
                           error={!!errors.password}
                           helperText={errors.password?.message}
                />

                <Button type="Submit" variant="conatined" color="primary">
                    Login
                </Button>
            </Stack>
        </form>
        <DevTool control={control}/>
    </>)


};