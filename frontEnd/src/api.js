import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3636/", // URL da API
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Permite envio automático de cookies
});

// Função para exibir o bloqueio de tela
function showLoading() {
    let overlay = document.querySelector(".screen-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "screen-overlay";
        document.body.appendChild(overlay);

        const loadingSpinner = document.createElement("div");
        loadingSpinner.className = "loading-spinner";
        overlay.appendChild(loadingSpinner);
    }
}

// Função para remover o bloqueio de tela
function hideLoading() {
    setTimeout(() => {
        const overlay = document.querySelector(".screen-overlay");
        if (overlay) overlay.remove();
    }, 100); // Pequeno delay para evitar glitches visuais
}

// Criando um wrapper para incluir o loading nas chamadas
const apiMethods = {
    loading() {
        showLoading();
        return {
            getData(url, params = {}) {
                return api.get(url, { params })
                    .finally(hideLoading);
            },
            postData(url, data) {
                return api.post(url, data)
                    .finally(hideLoading);
            },
            putData(url, data) {
                return api.put(url, data)
                    .finally(hideLoading);
            },
            deleteData(url) {
                return api.delete(url)
                    .finally(hideLoading);
            },
        };
    },

    getData(url, params = {}) {
        return api.get(url, { params });
    },
    postData(url, data) {
        return api.post(url, data);
    },
    putData(url, data) {
        return api.put(url, data);
    },
    deleteData(url) {
        return api.delete(url);
    },
};

export default apiMethods;