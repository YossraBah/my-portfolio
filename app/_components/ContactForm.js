import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Replace with EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Replace with EmailJS Template ID
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Replace with EmailJS Public Key
      );

      toast("Your message is sent successfully!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: {
          backgroundColor: "#A53DFF",
          color: "#fff",
        },
      });

      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-fluid flex flex-col gap-2">
        <InputText
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Name*"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <small className="p-error">{errors.name.message}</small>
        )}
        <InputText
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Email*"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <small className="p-error">{errors.email.message}</small>
        )}

        <div className="flex gap-6">
          <div className="w-1/3">
            <InputText
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Budget*"
              {...register("budget", { required: "Budget is required" })}
            />
            {errors.budget && (
              <small className="p-error">{errors.budget.message}</small>
            )}
          </div>
          <div className="w-2/3">
            <InputText
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Subject*"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <small className="p-error">{errors.subject.message}</small>
            )}
          </div>
        </div>
        <InputTextarea
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Message*"
          {...register("message", { required: "Message is required" })}
          rows={5}
          cols={30}
        />
        {errors.message && (
          <small className="p-error">{errors.message.message}</small>
        )}
      </div>
      <Button
        className="bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 mt-9"
        label="Submit"
        icon="pi pi-send"
        iconPos="right"
      />
      <ToastContainer position="bottom-right" />
    </form>
  );
}
