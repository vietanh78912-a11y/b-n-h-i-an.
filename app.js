const places = [
  {
    group: "Khách sạn 5 sao",
    name: "Little Gem Hoi An Boutique Hotel & Spa",
    type: "Khách sạn 5 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Little+Gem+Hoi+An+Boutique+Hotel+Spa",
    exact: "15.8830,108.3350",
    desc: "Khách sạn boutique chuẩn 5 sao kết hợp phong cách kiến trúc hoài cổ và hiện đại, trang bị đầy đủ hồ bơi vô cực, dịch vụ spa cao cấp và nhà hàng sang trọng gần phố cổ.",
    travelers: "solo",
    vibe: "culture",
    budget: "luxury",
    priceText: "4.200.000 đ / đêm"
  },
  {
    group: "Khách sạn 5 sao",
    name: "Grand Sunrise Palace Hoi An",
    type: "Khách sạn 5 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Grand+Sunrise+Palace+Hoi+An",
    exact: "15.8850,108.3400",
    desc: "Tọa lạc tại vị trí đắc địa, cung cấp hệ thống phòng nghỉ hướng sông và thành phố thoáng đãng, tích hợp phòng gym hiện đại, bar thượng tầng và hồ bơi ngoài trời.",
    travelers: "group",
    vibe: "scenic",
    budget: "luxury",
    priceText: "3.800.000 đ / đêm"
  },
  {
    group: "Khách sạn 5 sao",
    name: "Nolia Hoi An",
    type: "Khách sạn 5 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Nolia+Hoi+An",
    exact: "15.8780,108.3320",
    desc: "Không gian lưu trú đẳng cấp với thiết kế tinh tế tối giản, dịch vụ chăm sóc khách hàng chuyên nghiệp 24/7 và vị trí thuận lợi để di chuyển tham quan các di sản văn hóa.",
    travelers: "solo",
    vibe: "luxury",
    budget: "luxury",
    priceText: "4.500.000 đ / đêm"
  },
  {
    group: "Khách sạn 5 sao",
    name: "Allegro Hoi An – A Little Luxury Hotel & Spa",
    type: "Khách sạn 5 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Allegro+Hoi+An",
    exact: "15.8790,108.3360",
    desc: "Khách sạn sang trọng mang đậm hồn phượng hoàng xưa của Hội An, nổi tiếng với dịch vụ xe đạp miễn phí, ẩm thực tinh tế và khu spa thư giãn tuyệt vời.",
    travelers: "group",
    vibe: "culture",
    budget: "luxury",
    priceText: "5.000.000 đ / đêm"
  },
  {
    group: "Khách sạn 5 sao",
    name: "Hoianan Boutique Hotel",
    type: "Khách sạn 5 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoianan+Boutique+Hotel",
    exact: "15.8810,108.3420",
    desc: "Mang đến trải nghiệm nghỉ dưỡng đích thực với phòng ốc rộng rãi, ban công ngắm cảnh thơ mộng và đội ngũ nhân viên thân thiện đậm chất mến khách xứ Quảng.",
    travelers: "solo",
    vibe: "scenic",
    budget: "luxury",
    priceText: "3.900.000 đ / đêm"
  },
  {
    group: "Khách sạn 5 sao",
    name: "Hoi An Central Hotel",
    type: "Khách sạn 5 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Central+Hotel",
    exact: "15.8820,108.3340",
    desc: "Khách sạn trung tâm tiêu chuẩn cao cấp, điểm dừng chân lý tưởng cho cả khách du lịch nghỉ dưỡng lẫn khách doanh nhân muốn khám phá trọn vẹn phố cổ.",
    travelers: "group",
    vibe: "culture",
    budget: "luxury",
    priceText: "3.600.000 đ / đêm"
  },
  {
    group: "Khách sạn 5 sao",
    name: "The Signature Hoi An",
    type: "Khách sạn 5 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=The+Signature+Hoi+An",
    exact: "15.8840,108.3380",
    desc: "Kiến trúc độc bản tạo dấu ấn riêng biệt, dịch vụ lưu trú thượng hạng với các tiện ích nội khu khép kín đạt chuẩn quốc tế.",
    travelers: "solo",
    vibe: "luxury",
    budget: "luxury",
    priceText: "4.800.000 đ / đêm"
  },
  {
    group: "Khách sạn 4 sao",
    name: "Hoi An Historic Hotel",
    type: "Khách sạn 4 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Historic+Hotel",
    exact: "15.8760,108.3300",
    desc: "Khách sạn lâu đời mang phong cách thuộc địa nằm giữa khuôn viên vườn cây xanh mát ngay trung tâm thành phố.",
    travelers: "group",
    vibe: "culture",
    budget: "mid",
    priceText: "2.400.000 đ / đêm"
  },
  {
    group: "Khách sạn 4 sao",
    name: "Little Hoi An Boutique Hotel & Spa",
    type: "Khách sạn 4 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Little+Hoi+An+Boutique+Hotel+Spa",
    exact: "15.8759,108.3228",
    desc: "Khách sạn boutique ấm cúng bên dòng sông Hoài yên bình, mang lại cảm giác thư thái và gần gũi với thiên nhiên.",
    travelers: "solo",
    vibe: "scenic",
    budget: "mid",
    priceText: "2.200.000 đ / đêm"
  },
  {
    group: "Khách sạn 4 sao",
    name: "Laluna Hoi An Riverside Hotel & Spa",
    type: "Khách sạn 4 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Laluna+Hoi+An+Riverside+Hotel",
    exact: "15.8750,108.3370",
    desc: "Khách sạn ven sông tuyệt đẹp với tầm nhìn thoáng đãng đón hoàng hôn buông xuống trên phố cổ Hội An.",
    travelers: "group",
    vibe: "scenic",
    budget: "mid",
    priceText: "2.600.000 đ / đêm"
  },
  {
    group: "Khách sạn 4 sao",
    name: "Silk River Hoi An Retreat",
    type: "Khách sạn 4 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Silk+River+Hoi+An+Retreat",
    exact: "15.8860,108.3330",
    desc: "Khu nghỉ dưỡng phong cách retreat nhẹ nhàng, chú trọng vào chăm sóc sức khỏe, thiền định và không gian yên tĩnh.",
    travelers: "solo",
    vibe: "luxury",
    budget: "mid",
    priceText: "2.800.000 đ / đêm"
  },
  {
    group: "Khách sạn 4 sao",
    name: "Hoi An Golden Holiday Hotel & Spa",
    type: "Khách sạn 4 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Golden+Holiday+Hotel+Spa",
    exact: "15.8740,108.3340",
    desc: "Cung cấp phòng nghỉ tiện nghi cao cấp cùng dịch vụ đưa đón sân bay và tour tham quan làng nghề lân cận.",
    travelers: "group",
    vibe: "culture",
    budget: "mid",
    priceText: "2.100.000 đ / đêm"
  },
  {
    group: "Khách sạn 3 sao",
    name: "Hoi An Green Riverside Oasis Villa",
    type: "Biệt thự 3 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Green+Riverside+Oasis+Villa",
    exact: "15.8730,108.3450",
    desc: "Villa xanh mát ẩn mình bên những rặng dừa nước, thích hợp cho gia đình hoặc nhóm bạn muốn tận hưởng không gian riêng tư.",
    travelers: "group",
    vibe: "scenic",
    budget: "economy",
    priceText: "1.200.000 đ / đêm"
  },
  {
    group: "Khách sạn 3 sao",
    name: "Tomorrow Hoi An Villa",
    type: "Biệt thự 3 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Tomorrow+Hoi+An+Villa",
    exact: "15.8870,108.3310",
    desc: "Villa thiết kế trẻ trung, hiện đại, phục vụ bữa sáng ngon miệng và có hỗ trợ thuê xe máy khám phá phố cổ.",
    travelers: "solo",
    vibe: "culture",
    budget: "economy",
    priceText: "950.000 đ / đêm"
  },
  {
    group: "Khách sạn 3 sao",
    name: "Premium CGP Hotel Hoi An",
    type: "Khách sạn 3 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Premium+CGP+Hotel+Hoi+An",
    exact: "15.8720,108.3380",
    desc: "Khách sạn tiêu chuẩn 3 sao giá tốt, sạch sẽ và nằm gần các khu chợ địa phương nhộn nhịp.",
    travelers: "solo",
    vibe: "culture",
    budget: "economy",
    priceText: "850.000 đ / đêm"
  },
  {
    group: "Khách sạn 3 sao",
    name: "Hoi An Legend Charm Boutique Hotel",
    type: "Khách sạn 3 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Legend+Charm+Boutique+Hotel",
    exact: "15.8880,108.3360",
    desc: "Sự kết hợp hoàn hảo giữa nét truyền thống Hội An và sự tiện nghi hiện đại trong tầm giá cực kỳ hợp lý.",
    travelers: "group",
    vibe: "culture",
    budget: "economy",
    priceText: "1.100.000 đ / đêm"
  },
  {
    group: "Khách sạn 3 sao",
    name: "Hoi An Ivy Hotel",
    type: "Khách sạn 3 sao",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Ivy+Hotel",
    exact: "15.8710,108.3330",
    desc: "Khách sạn nhỏ xinh thân thiện, nổi tiếng với sự hiếu khách và dịch vụ chăm sóc khách hàng chu đáo.",
    travelers: "solo",
    vibe: "culture",
    budget: "economy",
    priceText: "750.000 đ / đêm"
  },
  {
    group: "Resort/Homestay",
    name: "Four Seasons Resort The Nam Hai",
    type: "Resort cao cấp",
    area: "Điện Bàn, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Four+Seasons+Resort+The+Nam+Hai",
    exact: "15.9300,108.3300",
    desc: "Khu nghỉ dưỡng siêu sang ven biển đẳng cấp thế giới, sở hữu bãi biển riêng tư tuyệt đẹp và các biệt thự sang trọng bậc nhất miền Trung.",
    travelers: "group",
    vibe: "scenic",
    budget: "luxury",
    priceText: "12.000.000 đ / đêm"
  },
  {
    group: "Resort/Homestay",
    name: "Palm Garden Beach Resort & Spa",
    type: "Resort biển",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Palm+Garden+Beach+Resort+Hoi+An",
    exact: "15.9100,108.3340",
    desc: "Resort nằm ẩn mình dưới tán rừng dừa rợp bóng mát ngay sát bãi biển Cửa Đại, không gian nghỉ dưỡng nhiệt đới hoàn hảo.",
    travelers: "group",
    vibe: "scenic",
    budget: "luxury",
    priceText: "4.500.000 đ / đêm"
  },
  {
    group: "Resort/Homestay",
    name: "Hoi An Ancient House Resort & Spa",
    type: "Resort truyền thống",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+House+Resort",
    exact: "15.8700,108.3400",
    desc: "Tái hiện không gian nhà cổ Hội An truyền thống với các gian nhà lợp ngói âm dương và hồ bơi giữa vườn dừa.",
    travelers: "group",
    vibe: "culture",
    budget: "mid",
    priceText: "2.300.000 đ / đêm"
  },
  {
    group: "Resort/Homestay",
    name: "The View Homestay Hoi An",
    type: "Homestay",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=The+View+Homestay+Hoi+An",
    exact: "15.8790,108.3450",
    desc: "Homestay ấm cúng với sân thượng ngắm toàn cảnh thành phố, phù hợp cho các bạn trẻ yêu thích du lịch trải nghiệm.",
    travelers: "solo",
    vibe: "scenic",
    budget: "economy",
    priceText: "550.000 đ / đêm"
  },
  {
    group: "Resort/Homestay",
    name: "Phoenix Homestay Hoi An",
    type: "Homestay",
    area: "Hội An, Đà Nẵng",
    link: "https://www.google.com/maps/search/?api=1&query=Phoenix+Homestay+Hoi+An",
    exact: "15.8760,108.3430",
    desc: "Điểm dừng chân bình dị, giá rẻ, sạch sẽ và chủ nhà cực kỳ nhiệt tình hướng dẫn các quán ăn ngon tại địa phương.",
    travelers: "solo",
    vibe: "culture",
    budget: "economy",
    priceText: "480.000 đ / đêm"
  }
];

const badgeIcons = {
  "Khách sạn 5 sao": "👑",
  "Khách sạn 4 sao": "⭐",
  "Khách sạn 3 sao": "💫",
  "Resort/Homestay": "🌴"
};

const center = [15.8801, 108.3380];
const map = L.map("map", { zoomControl: true }).setView(center, 14);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const markers = [];

// Tính năng Chỉnh Sáng/Tối
const themeToggleBtn = document.getElementById("themeToggleBtn");
const htmlRoot = document.documentElement;

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = htmlRoot.getAttribute("data-theme");
  if (currentTheme === "dark") {
    htmlRoot.setAttribute("data-theme", "light");
    themeToggleBtn.textContent = "🌙";
  } else {
    htmlRoot.setAttribute("data-theme", "dark");
    themeToggleBtn.textContent = "☀️";
  }
});

// Modal Elements & Ride Integration
const modal = document.getElementById("detailModal");
const closeModal = document.getElementById("closeModal");
const modalGroup = document.getElementById("modalGroup");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDesc = document.getElementById("modalDesc");
const modalPriceTag = document.getElementById("modalPriceTag");
const modalMapLink = document.getElementById("modalMapLink");
const grabLink = document.getElementById("grabLink");
const xanhsmLink = document.getElementById("xanhsmLink");

function showDetailModal(place) {
  modalGroup.textContent = place.group;
  modalTitle.textContent = place.name;
  modalMeta.textContent = `${place.type} · ${place.area}`;
  modalDesc.textContent = place.desc;
  modalPriceTag.textContent = `💵 Mức giá tham khảo: ${place.priceText}`;
  modalMapLink.href = place.link;

  const encodedName = encodeURIComponent(place.name + " " + place.area);
  grabLink.href = `https://r.grab.com/g/?dropoff_name=${encodedName}`;
  xanhsmLink.href = `https://www.vinfastauto.com/vn_vi/xanh-sm`;

  modal.classList.add("active");
}

closeModal.addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

// Khởi tạo Ghim bản đồ
places.forEach((place) => {
  const [lat, lng] = place.exact.split(",").map(Number);

  const pin = L.divIcon({
    className: "",
    html: `<div class="custom-pin" style="background:${
      place.group === 'Khách sạn 5 sao' ? '#f59e0b' :
      place.group === 'Khách sạn 4 sao' ? '#3b82f6' :
      place.group === 'Khách sạn 3 sao' ? '#8b5cf6' : '#10b981'
    }"><span>${badgeIcons[place.group]}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -34]
  });

  const marker = L.marker([lat, lng], { icon: pin });

  marker.on("click", () => {
    map.flyTo([lat, lng], 16, { animate: true });
    showDetailModal(place);
  });

  marker.place = place;
  marker.addTo(markerLayer);
  markers.push(marker);
});

const list = document.getElementById("placeList");
const count = document.getElementById("resultCount");
const search = document.getElementById("searchInput");
const travelersSelect = document.getElementById("travelersSelect");
const vibeSelect = document.getElementById("vibeSelect");
const budgetSelect = document.getElementById("budgetSelect");

function render() {
  const keyword = search.value.trim().toLowerCase();
  const travelersVal = travelersSelect.value;
  const vibeVal = vibeSelect.value;
  const budgetVal = budgetSelect.value;

  const visible = places.filter((place) => {
    const text = `${place.name} ${place.type} ${place.area} ${place.desc}`.toLowerCase();
    
    const matchesTravelers = travelersVal === "all" || place.travelers === travelersVal;
    const matchesVibe = vibeVal === "all" || place.vibe === vibeVal;
    const matchesBudget = budgetVal === "all" || place.budget === budgetVal;
    const matchesSearch = !keyword || text.includes(keyword);

    return matchesTravelers && matchesVibe && matchesBudget && matchesSearch;
  });

  count.textContent = `${visible.length} điểm`;

  if (visible.length === 0) {
    list.innerHTML = `<div class="empty-state">Không tìm thấy địa điểm phù hợp với tiêu chí lựa chọn của bạn.</div>`;
  } else {
    list.innerHTML = visible.map((place) => `
      <article class="place-card" data-name="${place.name.replace(/"/g, "&quot;")}">
        <div class="place-icon" style="background:${
          place.group === 'Khách sạn 5 sao' ? '#f59e0b' :
          place.group === 'Khách sạn 4 sao' ? '#3b82f6' :
          place.group === 'Khách sạn 3 sao' ? '#8b5cf6' : '#10b981'
        }">${badgeIcons[place.group]}</div>
        <div style="flex: 1;">
          <h3>${place.name}</h3>
          <p class="place-meta">${place.type} · ${place.area}</p>
          <div class="place-price-tag">💰 ${place.priceText}</div>
        </div>
      </article>
    `).join("");
  }

  document.querySelectorAll(".place-card").forEach((card) => {
    card.addEventListener("click", () => {
      const place = places.find(p => p.name === card.dataset.name);
      const marker = markers.find(m => m.place.name === card.dataset.name);
      if (place && marker) {
        map.setView(marker.getLatLng(), 16, { animate: true });
        showDetailModal(place);
      }
    });
  });

  markers.forEach((marker) => {
    const isVisible = visible.some(p => p.name === marker.place.name);
    marker.setOpacity(isVisible ? 1 : 0.2);
  });
}

search.addEventListener("input", render);
travelersSelect.addEventListener("change", render);
vibeSelect.addEventListener("change", render);
budgetSelect.addEventListener("change", render);

document.getElementById("resetViewButton").addEventListener("click", () => {
  map.setView(center, 14);
});

render();