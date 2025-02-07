import SpecificProductLayout from "@/components/component/specificProductLayout/specificProductLayout";
import ReduxProvider from "@/redux/ReduxProvider";

export default function SpecificProductPage() {

  return (
    <>
    <ReduxProvider>
     <SpecificProductLayout/>
    </ReduxProvider>
    </>
  );
}