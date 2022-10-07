const unReadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById(".notifications");
const markAll = document.getElementById(".mark__all");


unread.innerText = unReadMessages.length;

unReadMessages.forEach((comment) => {
    comment.addEventListener("click", () => {
        comment.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll("unread");
        unread.innerText = newUnreadMessages.length;
    })
})


markAll.addEventListener("click", () => {
    unReadMessages.forEach((comment) => {
        comment.classList.remove("unread")
    })
    const newUnreadMessages = document.querySelectorAll("unread");
    unread.innerText = newUnreadMessages.length;
})