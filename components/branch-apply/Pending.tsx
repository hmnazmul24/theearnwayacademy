"use client";
const PendingPage = () => {
  return (
    <div className="min-h-[60vh] flex_center branchInfoGredientBg ">
      <div className="text-center w-[90%] m-auto bg-white bangla_font rounded-md py-7 px-3 md:w-[50%]">
        ধন্যবাদ... আপনার আবেদনটি{" "}
        <span className="text-[green] text-[1.2rem] font-bold">সফল</span>{" "}
        হয়েছে, আগামী <span className="text-[1.4rem]">৭</span> থেকে{" "}
        <span className="text-[1.4rem]">১৫</span> দিনের মধ্যে আপনার ব্রাঞ্চ
        ইউজার আইডি পাসওয়ার্ড প্রদান করা হবে । এবং সর্বজনীন যাচাই পর্ব শেষ করে
        10 দিন থেকে দুই মাসের মধ্যে আপনার লাইসেন্স প্রদান করা হবে।
      </div>
    </div>
  );
};

export default PendingPage;
