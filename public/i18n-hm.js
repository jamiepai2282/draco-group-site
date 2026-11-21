// Hallmark 改版：頁尾那行不用「·」串接改成換行；集團名稱不用全大寫
(function () {
  var I = window.I18N;
  Object.keys(I).forEach(function (k) {
    if (I[k].foot) I[k].foot = I[k].foot.split(' · ').join('\n').replace('DRACO GROUP', 'Draco Group');
  });
})();
