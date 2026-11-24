const topics={'I':'地球','II':'微觀世界 I','III':'金屬','IV':'酸和鹼','V':'化石燃料和碳化合物','VI':'微觀世界 II','VII':'氧化還原反應、化學電池和電解','VIII':'化學反應與能量','IX':'反應速率','X':'化學平衡','XI':'碳化合物的化學','XII':'化學世界中的規律','XIII':'工業化學','XV':'分析化學','M':'跨課題綜合'};
const english=['Planet Earth','Microscopic World I','Metal Reactivity','Metal Calculations','Acids and Bases','Volumetric Analysis','Fossil Fuels','Microscopic World II','Redox Reactions','Chemical Cells','Electrolysis','Reactions and Energy','Rate of Reaction','Chemical Equilibrium','Organic Structures','Organic Reactions','Organic Synthesis','Chemical Patterns','Mixed Practice','Two-pass Strategy','Timed Practice','Final Rehearsal','Final Clinic'];
const plan=[
['I','海水、岩石和礦物','Q1–3','Q4–6','Q7–14'],
['II','原子結構、電子排佈與鍵合','Q1–8','Q9–18','Q19–35'],
['III','金屬活性與置換反應','Q1–8','Q9–18','Q19–33'],
['III','摩爾、質量與化學計量','Q34–41','Q42–51','Q52–58'],
['IV','酸鹼強度、濃度與 pH','Q1–7、Q22','Q23–32','Q33–45'],
['IV','滴定、鹽的製備與容量分析','Q8–15','Q16–21、Q46–49','Q50–69（分兩次）'],
['V','分餾、裂解及碳氫化合物','Q1–8','Q9–18','Q19–44（分兩次）'],
['VI','分子形狀與分子間作用力','Q1–8','Q9–18','Q19–23 ＋ M1'],
['VII','氧化數、電子轉移','Q26–33','Q34–43','Q44–47'],
['VII','電極反應與電子流向','Q13–20','Q21–25、Q48–52','Q53'],
['VII','電解產物與電極選擇','Q1–8','Q9–12、Q54–59','Q60–63'],
['VIII','焓變與赫斯定律','Q1–8','Q9–18','Q19–33 ＋ M2'],
['IX','碰撞理論、圖像與變因','Q1–8','Q9–18','Q19–34'],
['X','動態平衡與平衡常數','Q1–8','Q9–18','Q19–37'],
['XI','官能團與異構','Q1–8','Q9–17、Q38','Q39–47 ＋ M3'],
['XI','試劑、條件與產物','Q48–55','Q56–65','Q66–74'],
['XI','路線、碳骨架與反應類型','Q18–25','Q26–35','Q36–37、Q75–89'],
['XII','周期趨勢與性質比較','Q1–8','Q9–18','Q19–27 ＋ M4'],
['M','跨課題錯因分析','講評兩項主要錯因','M5 · 36 MC / 45 min','M6 及訂正'],
['M','兩輪答題策略','比較更改答案的原因','M7 · 36 MC / 45 min','M8 及未完成題'],
['M','個人限時策略','整理個人檢查表','M9 · 36 MC / 45 min','48 小時後重測'],
['M','綜合演練','討論三項持續錯誤','M10 · 36 MC / 45 min','短題補弱及訂正'],
['M','考前錯題診所','整理錯題與猜對題','重做 8–12 題','試劑、觀察、方程式及單位']];
const hub='https://davidkamfu-star.github.io/ch6/';
const electiveSkills=['速率圖與催化','速率方程與級數','由實驗數據求 k','工業條件與產率','哈柏法條件取捨','能源及綠色化學','工業過程比較','工業陌生數據題','定性測試與觀察','分離方法與取樣','容量分析','色譜與 Rf','比色法及校準線','紅外光譜','質譜及鑑定','多項證據鑑定','工業化學獨立題','分析化學獨立題','工業限時分段','分析限時分段','卷二組合重測','較弱選修補救','方法、觀察及光譜速讀'];
function elective(w){return w<=8||[17,19,21].includes(w)?'XIII':'XV'}
function blocks(w){const p=plan[w-1];if(w===1)return [['課堂準備','5 min','記錄信心及設定個人目標'],['診斷測驗','30 min','獨立完成額外 24 題'],['地球專項訓練','12 min',p[2]+' 引導；'+p[3]+' 獨立'],['錯題回饋','18 min','整理兩項失分原因'],['Exit check','5 min','總結並佈置功課']];if(w>=19&&w<=22)return [['準備','3 min','設定限時策略'],['限時獨立 MC','45 min',p[3]],['優先錯題訂正','15 min',p[2]],['跟進安排','7 min',p[4]]];if(w===23)return [['提取練習','10 min','試劑、觀察、方程式及單位'],['錯題重做','30 min',p[3]],['個別講評','20 min','逐項核對失分原因'],['Exit check','10 min','寫下最後三項必查點']];return [['提取練習','5 min','重溫前課 4 題 Retrieval MC'],['先備概念','10 min','重溫先備知識及常見錯誤'],['引導操題','20 min',p[2]+' · Guided MC'],['限時獨立操題','20 min',p[3]+' · Timed independent MC'],['錯題討論','10 min','核對答案、分析失分原因'],['Exit check','5 min','概念短問及課後功課安排']]}
function tasks(w){return [...blocks(w).map(x=>[x[0],x[2]]),['課後功課',plan[w-1][4]],['Paper 2 配對練習',electiveSkills[w-1]],...(w%2===0?[['雙週答卷／功課檢視','核對原卷、記錄追回評分點，更新三項優先目標']]:[])]}
const stages=['待作答','已批改','待補救','待重測','已重測'];const causes=['概念混淆','審題失誤','計算或單位','觀察與推論','遺漏評分點','時間分配','猜對／欠信心','其他'];const papers=['Paper 1A','Paper 1B','Paper 2'];const missions=['The Copper Archives','Kinetics Lab','Electrolysis Works'];const missionURLs=['chem-master-world.html','reaction-rate-lab.html','electrolysis-workshop.html'];const attendance=['未點名','出席','缺席','調堂'];
