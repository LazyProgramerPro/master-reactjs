# Github actions

- Dịch vụ tự động hóa quy trình phát triển phần mềm của bạn trên Github.
- Dịch vụ này cho phép bạn tự động hóa mọi thứ, các loại quy trình và hành động liên quan đến repository của bạn.
- Nổi bật nhất là quy trình CI/CD (Continuous Integration/Continuous Delivery) tự động.

### Image

# Key concepts

## Workflow

- Một quy trình là một tập hợp các hành động được thực hiện khi một sự kiện cụ thể xảy ra.
- Là 1 quy trình làm việc được gắn vào repository của bạn.
- Mỗi quy trình chứa một hoặc nhiều job.
- Được trigger trên một sự kiện cụ thể, như push, pull request, issue, release, ...

## Job

- Define 1 Runner ( môi trường thực thi: máy và hệ điều hành sẽ được sử dụng ) cho các step.
- Một job là một tập hợp các hành động được thực hiện trên một máy ảo.
- Mỗi job chạy trên một máy ảo riêng biệt.
- Mỗi job contains một hoặc nhiều step.
- Có thể chạy song song hoặc tuần tự.
- Có điều kiện chạy job (if, unless, ...)

## Step

- Mỗi job chứa một hoặc nhiều step.
- Mỗi step là một hành động cụ thể, như chạy một lệnh hoặc gửi một email ( install node , chạy lệnh này lệnh kia, ...).
- Có thể chạy lệnh của chúng ta hoặc sử dụng một action có sẵn( Na ná npm package).
- Có thể chạy song song hoặc tuần tự.
- Có thể có điêu kiện chạy step (if, unless, ...)

## Event

- Một sự kiện là một hành động nào đó xảy ra trên repository của bạn.
- Các sự kiện bao gồm: push, pull request, issue, release, ...

## Runner

- Một máy ảo chạy các job của quy trình.
- Có thể chạy trên máy ảo của Github hoặc máy ảo của bạn.

### Image

## GitHub Actions: Availability & Pricing

- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository

- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository

## Config ( Tạo file cấu hình ở Repo Local hoặc tạo trên Github)

- Github Actions sử dụng file cấu hình YAML để xác định các hành động cần thực hiện.
- Có thể tạo file cấu hình trong thư mục `.github/workflows` của repository.
- Mỗi file cấu hình sẽ chứa một hoặc nhiều job, mỗi job sẽ chứa một hoặc nhiều step.

- VD1: `.github/workflows/main.yml`

```yml
  name: First Workflow # Tên của quy trình
  on: workflow_dispatch # Sự kiện trigger quy trình - ở đây là bắt đầu quy trình bằng cách chạy thủ công (Bấm nút trên Github)
  jobs: # Các job cần thực hiện
    first-job: # Tên của job
      runs-on: ubuntu-latest # Môi trường chạy job
      steps: # Các bước thực hiện trong job
        - name: Print greeting # Tên của bước
          run: echo "Hello World!" # Lệnh thực hiện
        - name: Print goodbye # Tên của bước
          run: echo "Done - bye!" # Lệnh thực hiện
```

- VD2: `.github/workflows/deployment.yml`

```yml
name: Deploy Project # Tên của quy trình
on: [push, workflow_dispatch] # Sự kiện trigger quy trình - ở đây là push code lên Github hoặc chạy thủ công
jobs: # Các job cần thực hiện
  test: # Tên của job
    runs-on: ubuntu-latest # Môi trường chạy job
    steps: # Các bước thực hiện trong job
      - name: Get code # Tên của bước
        uses: actions/checkout@v3 # Sử dụng action checkout để lấy code
      - name: Install NodeJS # Tên của bước
        uses: actions/setup-node@v3 # Sử dụng action setup-node để cài đặt NodeJS
        with: # Tham số truyền vào action
          node-version: 18 # Phiên bản NodeJS
      - name: Install dependencies # Tên của bước
        run: npm ci # Lệnh thực hiện
      - name: Run tests # Tên của bước
        run: npm test # Lệnh thực hiện
  deploy: # Tên của job
    needs: test # Job này cần chạy sau job test ( chờ job test chạy xong mới chạy job này và ko chạy song song . Nếu job test fail thì job này sẽ ko chạy)
    runs-on: ubuntu-latest # Môi trường chạy job
    steps: # Các bước thực hiện trong job
      - name: Get code # Tên của bước
        uses: actions/checkout@v3 # Sử dụng action checkout để lấy code
      - name: Install NodeJS # Tên của bước
        uses: actions/setup-node@v3 # Sử dụng action setup-node để cài đặt NodeJS
        with: # Tham số truyền vào action
          node-version: 18 # Phiên bản NodeJS
      - name: Install dependencies # Tên của bước
        run: npm ci # Lệnh thực hiện
      - name: Build project # Tên của bước
        run: npm run build # Lệnh thực hiện
      - name: Deploy project # Tên của bước
        run: echo "Deploying ..." # Lệnh thực hiện
```

- VD3: `.github/workflows/output.yml`

```yml
name: Output information # Tên của quy trình
on: workflow_dispatch # Sự kiện trigger quy trình - ở đây là bắt đầu quy trình bằng cách chạy thủ công (Bấm nút trên Github)
jobs: # Các job cần thực hiện
  info: # Tên của job
    runs-on: ubuntu-latest # Môi trường chạy job
    steps: # Các bước thực hiện trong job
      - name: Output GitHub context # Tên của bước
        run: echo "${{ toJSON(github) }}" # Lệnh thực hiện: Lệnh này sẽ in ra thông tin của Github context : https://docs-github-com.translate.goog/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs?_x_tr_sl=en&_x_tr_tl=vi&_x_tr_hl=vi&_x_tr_pto=sc&_x_tr_hist=true
```
## Sumary

### Image

## Workflow & Events Deep Dive
### Available events
- Sự kiện gắn với repository của bạn, mà khi xảy ra sẽ trigger quy trình.Các sự kiện bao gồm:
  - `push`: Khi có push code lên repository.
  - `pull_request`: Khi có pull request tới repository.
  - `issue`: Khi có issue tới repository.
  - `release`: Khi có release tới repository.
  - `workflow_dispatch`: Khi chạy quy trình bằng cách chạy thủ công.
  - `schedule`: Khi chạy quy trình theo lịch trình.
  - `repository_dispatch`: Khi chạy quy trình bằng cách gửi một sự kiện tới repository.
  - `...`
- Các sự kiện khác:
  - `workflow_run`: Khi quy trình chạy.
  - `check_run`: Khi check chạy.
  - `check_suite`: Khi check chạy.
  - `...`

- Doc: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
### Image

- VD: `.github/workflows/demo1-starter.yml`

```yml
name: Events Demo 1 # Tên của quy trình
on: ... # Sự kiện trigger quy trình
jobs: # Các job cần thực hiện
  deploy: # Tên của job
    runs-on: ubuntu-latest # Môi trường chạy job
    steps: # Các bước thực hiện trong job
      - name: Output event data # Tên của bước
        run: echo "${{ toJSON(github.event) }}" # Lệnh thực hiện: Lệnh này sẽ in ra thông tin của sự kiện trigger quy trình
      - name: Get code # Tên của bước
        uses: actions/checkout@v3 # Sử dụng action checkout để lấy code
      - name: Install dependencies
        run: npm ci
      - name: Test code
        run: npm run test
      - name: Build code
        run: npm run build
      - name: Deploy project
        run: echo "Deploying..."

```

- Khi chúng ta đẩy code lên, chúng ta không thể trigger tất các các nhánh, chỉ trigger những nhánh được chỉ định trong file cấu hình.

### Event Activity Type & Filters

- VD: `.github/workflows/demo1-finish.yml`

```yml
name: Events Demo 1
on:
  pull_request: # Khi có pull request tới repository
    types: [opened, synchronize, reopened] # Các loại pull request
      - opened # Khi có pull request mới
    branches: # Các nhánh sẽ trigger quy trình
      - main # main
      - 'dev-*' # dev-new dev-this-is-new
      - 'feat/**' # feat/new feat/new/button
  workflow_dispatch:
  push:
    branches: # Các nhánh sẽ trigger quy trình
      - main # main
      - 'dev-*' # dev-new dev-this-is-new
      - 'feat/**' # feat/new feat/new/button
      # developer-1
    paths-ignore: # Các đường dẫn sẽ không trigger quy trình
      - '.github/workflows/*'
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Output event data
        run: echo "${{ toJSON(github.event) }}"
      - name: Get code
        uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Test code
        run: npm run test
      - name: Build code
        run: npm run build
      - name: Deploy project
        run: echo "Deploying..."
```