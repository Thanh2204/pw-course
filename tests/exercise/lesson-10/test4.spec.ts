import { test } from "@playwright/test";
import { PersonalNotePage } from "./pom";

const notes = [
  {
    title: "Trung tâm dữ liệu đầu tiên sử dụng 16 triệu nơron người",
    content:
      "Các nhà nghiên cứu Singapore ra mắt một nguyên mẫu trung tâm dữ liệu mới sử dụng tế bào thần kinh người (nơron) để xử lý thông tin. Công nghệ này hướng tới việc giảm sự phụ thuộc hoàn toàn vào chip silicon.",
  },
  {
    title: "Robot hình người phá kỷ lục chạy 100 m",
    content:
      "Một robot hình người mới đã đạt thành tích ấn tượng trên đường chạy 100 m. Đây là bước tiến đáng chú ý trong quá trình phát triển robot có khả năng vận động giống con người.",
  },
  {
    title: "Tủ lạnh lượng tử có nhiệt độ thấp hơn không gian sâu",
    content:
      "IBM phát triển hệ thống làm lạnh sâu dạng module có thể đạt nhiệt độ dưới -273,14 độ C. Công nghệ này được kỳ vọng mở đường cho những máy tính lượng tử mạnh mẽ hơn.",
  },
  {
    title: "Google dùng trí tuệ nhân tạo bảo vệ cá voi",
    content:
      "Google đang phát triển phương thức sử dụng trí tuệ nhân tạo để theo dõi cá voi. Mục tiêu là hỗ trợ công tác bảo vệ loài động vật đang có nguy cơ tuyệt chủng.",
  },
  {
    title: "Robot của Google tự học đi trong môi trường thực",
    content:
      "Robot Rainbow Dash có thể tự học cách đi trên nhiều bề mặt khác nhau. Robot được thử nghiệm trên các địa hình như nệm xốp và thảm lau chân với nhiều điểm gấp khúc.",
  },
  {
    title: "Robot vòi bạch tuộc uốn cong siết chặt mọi đồ vật",
    content:
      "Vòi robot được phát triển dựa trên khả năng vận động của vòi bạch tuộc. Thiết bị có thể siết, hút và giữ nhiều loại đồ vật với hình dạng khác nhau.",
  },
  {
    title: "Cảm biến phát hiện mức độ căng thẳng của cơ thể",
    content:
      "Một thiết bị mới có khả năng phát hiện sự thay đổi nồng độ cortisol trong cơ thể. Công nghệ này có thể hỗ trợ nghiên cứu về lo lắng và các vấn đề liên quan đến căng thẳng.",
  },
  {
    title: "Máy tạo nhịp tim nhỏ nhất thế giới",
    content:
      "Các nhà khoa học phát triển máy tạo nhịp tim nhỏ hơn hạt gạo. Thiết bị chỉ dày khoảng 1 mm và dài 3,5 mm, có thể đặt vừa trong đầu kim tiêm.",
  },
  {
    title: "Drone AI đánh bại nhà vô địch thế giới trên đường đua",
    content:
      "Một drone được điều khiển bằng trí tuệ nhân tạo lần đầu đánh bại phi công trong cuộc đua drone quốc tế. Thành tích này đánh dấu bước tiến mới của AI trong lĩnh vực điều khiển tự động.",
  },
  {
    title: "Trung Quốc phát hiện mỏ hydro tự nhiên độ tinh khiết cao",
    content:
      "Các nhà khoa học Trung Quốc phát hiện một mỏ hydro tự nhiên có độ tinh khiết cao. Nguồn tài nguyên này có thể mở ra thêm hướng nghiên cứu và khai thác năng lượng trong tương lai.",
  },
];

test("Personal Note", async ({ page }) => {
  const personalNotePage = new PersonalNotePage(page);
  const keyword = "Google";

  await test.step("Open personal note page", async () => {
    await personalNotePage.openPersonalNotePage();
  });

  await test.step("Add notes", async () => {
    await personalNotePage.addMultiNote(notes);
  });

  await test.step("Search notes", async () => {
    await personalNotePage.searchNote(keyword);
    await personalNotePage.expectKeywordSearch();
  });
});
