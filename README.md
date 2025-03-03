# 3hjls Homepage!

# How to install
## For Window
1. https://rubyinstaller.org/ (Download lately version)
2. Type the cli on Terminal
    ```
    gem install jekyll bundler
    ```

※ if version error has occured

    bundle install
    gem cleanup
    bundle install
    
3. 

## For Mac
1. brew install ruby
2. Add to Path [.bashrc or .zshrc]
    ```
    echo '# Install Ruby Gems to ~/.gem' >> ~/.bashrc
    echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc
    echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.bashrc
    source ~/.bashrc
    ```


### Jekyll command

####install jekyll
gem install jekyll bundler

#### jekyll version check
jekyll -v

#### jekyll start
jekyll serve

modify 2024-09-24


<template>
  <div class="container">
    <h1 class="title">주소검색</h1>
    <p class="description">
      우편번호 입력으로 주소 검색 가능합니다.
      우편번호는 하이픈을 넣어서도 가능합니다
      (000-0000, 0000000 형식으로 입력해주세요.)
    </p>

    <div class="search-box">
      <input v-model="zipcode" type="text" placeholder="우편번호 입력 (예: 1234567)" />
      <button @click="searchAddress" :disabled="!zipcode">검색</button>
    </div>

    <div class="carousel">
      <button class="prev" @click="prevPage" :disabled="currentPage === 0">＜</button>

      <div class="card-container">
        <div
          v-for="(address, index) in results.slice(currentPage * 3, (currentPage + 1) * 3)"
          :key="index"
          class="card"
        >
          <p><strong>우편번호:</strong> {{ address.zipcode }}</p>
          <p><strong>주소:</strong> {{ address.address1 + address.address2 + address.address3 }}</p>
          <p><strong>주소 가나:</strong> {{ address.kana1 + address.kana2 + address.kana3 }}</p>
        </div>
      </div>

      <button class="next" @click="nextPage" :disabled="(currentPage + 1) * 3 >= results.length">＞</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 500px;
  margin: auto;
  text-align: center;
}

.search-box {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  input {
    padding: 5px;
    font-size: 16px;
  }

  button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    color: black;
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.card-container {
  display: flex;
  gap: 10px;
}

.card {
  background: white;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  min-width: 150px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

button.prev,
button.next {
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
}
button:disabled {
  color: #ccc;
  cursor: not-allowed;
}
</style>
