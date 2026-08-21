export default function showToast({
  message,
  icon,
  textColor,
}: {
  message: string;
  icon: string;
  textColor: string;
}) {
  const toast = document.createElement("div");

  toast.innerHTML = `
      <div class="fixed top-4 right-4 lg:top-8 lg:right-8 flex items-center font-semibold gap-2 px-4 py-2 rounded-[10px] border-2 border-[#790063] bg-black/80 p-8 shadow-2xl transform transition-transform duration-500 ease-in-out opacity-0 -translate-y-4 z-20 ${textColor}">
        <span>${icon}</span>
        <span>${message}</span>
      </div>
    `;
  document.body.appendChild(toast);

  const toastEl = toast.firstElementChild;
  if (!toastEl) return;

  requestAnimationFrame(() => {
    toastEl.classList.remove("opacity-0", "-translate-y-4");
    toastEl.classList.add("opacity-100", "translate-y-0");
  });

  setTimeout(() => {
    toastEl.classList.remove("opacity-100", "translate-y-0");
    toastEl.classList.add("opacity-0", "-translate-y-4");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
