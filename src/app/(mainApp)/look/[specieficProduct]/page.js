import ReduxProvider from "@/app/ReduxProvider";
import SpecificProductLayout from "@/components/component/specificProductLayout/specificProductLayout";

export default function SpecificProductPage() {

  return (
    <>
    <ReduxProvider>
     <SpecificProductLayout/>
    </ReduxProvider>
    </>
  );
}