const locThanhImages = [
    'images/Lộc Thánh IRC-01.png',
    'images/Lộc Thánh IRC-02.png',
    'images/Lộc Thánh IRC-03.png',
    'images/Lộc Thánh IRC-04.png',
    'images/Lộc Thánh IRC-05.png',
    'images/Lộc Thánh IRC-06.png',
    'images/Lộc Thánh IRC-07.png',
    'images/Lộc Thánh IRC-08.png',
    'images/Lộc Thánh IRC-09.png',
    'images/Lộc Thánh IRC-010.png',
    'images/Lộc Thánh IRC-011.png',
    'images/Lộc Thánh IRC-012.png',
    'images/Lộc Thánh IRC-013.png',
    'images/Lộc Thánh IRC-014.png',
    'images/Lộc Thánh IRC-015.png',
    'images/Lộc Thánh IRC-016.png',
    'images/Lộc Thánh IRC-017.png',
    'images/Lộc Thánh IRC-018.png',
    'images/Lộc Thánh IRC-019.png',
    'images/Lộc Thánh IRC-20.png',
    'images/Lộc Thánh IRC-21.png',
    'images/Lộc Thánh IRC-22.png',
    'images/Lộc Thánh IRC-23.png',
    'images/Lộc Thánh IRC-24.png',
    'images/Lộc Thánh IRC-25.png',
    'images/Lộc Thánh IRC-26.png',
    'images/Lộc Thánh IRC-27.png',
    'images/Lộc Thánh IRC-28.png',
    'images/Lộc Thánh IRC-29.png',
    'images/Lộc Thánh IRC-30.png',
    // Thêm nhiều đường dẫn hình ảnh khác ở đây
];

function randomLocThanh() {
    const randomIndex = Math.floor(Math.random() * locThanhImages.length);
    const resultImage = document.getElementById('resultImage');
    const downloadButton = document.getElementById('downloadButton');

    // Cập nhật src của hình ảnh và hiển thị nó
    resultImage.src = locThanhImages[randomIndex];
    resultImage.style.display = 'block';

    // Cập nhật href của nút download và hiển thị nó
    downloadButton.href = locThanhImages[randomIndex];
    downloadButton.style.display = 'inline-block';
}
// Tạo hiệu ứng hoa rơi
function createFallingFlower() {
    const flowerTypes = ['images/hoadao.png', 'images/baolixi.png'];
    const flowerContainer = document.getElementById('falling-flowers');
    const flower = document.createElement('img');

    flower.src = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.className = 'flower';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 5 + 5 + 's'; // Thời gian rơi ngẫu nhiên từ 2 đến 5 giây

    flowerContainer.appendChild(flower);

    // Loại bỏ phần tử hoa sau khi hoàn thành hiệu ứng
    flower.addEventListener('animationend', () => {
        flowerContainer.removeChild(flower);
    });
}
// Kiểm tra kích thước màn hình để điều chỉnh tần suất tạo hoa
let intervalTime = 3000; // Mặc định là 3 giây
if (window.innerWidth <= 768) {
    intervalTime = 7000; // Tăng lên 7 giây trên thiết bị di động
}

// Tạo hoa rơi mỗi intervalTime ms
setInterval(createFallingFlower, intervalTime);