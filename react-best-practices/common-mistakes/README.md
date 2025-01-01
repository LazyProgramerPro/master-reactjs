### Mistake

- useState is async( không đồng bộ): Bạn không thể truy cập ngay giá trị mới nhất của states
- Không sử dụng default state
- Không remove hoặc không sử dụng useState hoặc useEffect cho những giá trị có thể tính toán từ những giá trị khác
- Mutating state object: compare của state là so sánh shadow nên trong 1 số trường hợp mutation state, có thể giá trị thực sự đã thay đổi những CP sẽ không re-render
- Prop drilling
- Provider wrapping hell
- Rushing into React.memo() : Dùng react.memo() có thể giúp chúng ta tránh được sự chậm trễ của các CP nặng ko có ảnh hưởng nhưng vẫn bị re-render lại do thay đổi state. Các làm việc này đơn giản hơn là chúng ta có thể gói các thành phần nặng ko thay đổi do re-render và pass chúng vào CP thông qua props {children}. Đừng vội dùng React.memo() mà không đánh mọi khía cạnh
- Đồng bộ hóa states trong function thông qua useEffect
- Sử dụng điều kiện render nguy hiểm để check (users.length thay vì users.length > 0)
- Sử dụng 1 useEffect làm thay đổi 1 state, sau đó khi state đó thay đổi vô tình kích hoạt 1 useEffect khác.