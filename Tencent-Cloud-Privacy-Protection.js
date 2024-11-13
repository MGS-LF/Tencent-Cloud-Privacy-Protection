// ==UserScript==
// @name         腾讯云隐私保护
// @namespace    
// @version      0.1
// @description  为特定标签和数值显示添加模糊效果
// @author       MGS浪疯, ChatGPT
// @match        https://console.cloud.tencent.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义选择器字符串
    const blurSelectors = '.overview-v2-account-card-desc-text, .value.show, .account-card, .overview-v2-resource__item-right, .info-item-text, ._lh-ip-copy, ._lh-ip-item__data';

    // 定义一个变量来跟踪模糊效果的状态
    let isBlurEnabled = true;

    // 定义一个函数来添加模糊效果
    function applyBlurEffect() {
        const elements = document.querySelectorAll(blurSelectors);
        elements.forEach(element => {
            element.style.filter = 'blur(5px)';
        });
    }

    // 定义一个函数来移除模糊效果
    function removeBlurEffect() {
        const elements = document.querySelectorAll(blurSelectors);
        elements.forEach(element => {
            element.style.filter = 'none';
        });
    }

    // 定义一个函数来切换模糊效果
    function toggleBlurEffect() {
        if (isBlurEnabled) {
            removeBlurEffect();
            isBlurEnabled = false;
        } else {
            applyBlurEffect();
            isBlurEnabled = true;
        }
    }

    // 创建按钮并添加到页面
    const button = document.createElement('button');
    button.textContent = '切换隐私保护';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    button.style.padding = '10px';
    button.style.border = 'none';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.cursor = 'pointer';
    button.addEventListener('click', toggleBlurEffect);

    document.body.appendChild(button);

    // 监听页面变化，持续应用模糊效果
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && isBlurEnabled) { // Element node
                    applyBlurEffect();
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 初始页面加载时应用模糊效果
    if (isBlurEnabled) {
        applyBlurEffect();
    }

})();
