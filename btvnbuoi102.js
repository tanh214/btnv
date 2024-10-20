// Lấy tất cả các phần tử menu có submenu
const menuItems = document.querySelectorAll('.has-submenu > a');

menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn chuyển trang khi nhấp

        // Lấy menu con cấp 1 (submenu cấp 1)
        const submenu = this.nextElementSibling;

        // Kiểm tra xem menu con có đang được mở không
        if (submenu.classList.contains('active')) {
            submenu.classList.remove('active'); // Đóng menu con nếu đã mở
        } else {
            // Đóng tất cả các submenu khác
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.classList.remove('active');
            });

            // Mở menu con cấp 1 hiện tại
            submenu.classList.add('active');

            // Lấy tất cả các submenu cấp 2, cấp 3 bên trong menu con cấp 1
            const subMenusLevel2 = submenu.querySelectorAll('.submenu');
            subMenusLevel2.forEach(submenuLevel2 => {
                submenuLevel2.classList.add('active'); // Mở các submenu cấp 2
            });
        }
    });
});
