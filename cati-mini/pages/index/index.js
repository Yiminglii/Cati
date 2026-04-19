// ============================================================
// 🐱 Cati 小程序 - 页面逻辑
// ============================================================

// ============================================================
// 题库：60道全猫咪相关
// CAT_POV = "如果你是一只猫..."（第一人称）
// OBS = "你家的猫/当你...时猫会..."（观察视角）
// ============================================================

const CAT_POV = [
  // E/I ×8
  { icon: '🥫', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果你是一只猫，看见刚打开的罐头，第一反应是？',
    options: [{ icon: '⚡', text: '喵喵大叫冲过去转圈圈催开饭！', value: 'E' }, { icon: '👀', text: '悄悄靠近先观察情况再行动', value: 'I' }] },
  { icon: '🚪', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果家里来了陌生人（客人），你会？',
    options: [{ icon: '😺', text: '主动凑过去蹭人家腿展示魅力~', value: 'E' }, { icon: '🙈', text: '躲到沙发底下暗中观察等安全了再说', value: 'I' }] },
  { icon: '🪟', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果看到窗外有只鸟飞过，你会？',
    options: [{ icon: '😿', text: '咔咔咔大声喊全家人来看！！一起兴奋', value: 'E' }, { icon: '🧘', text: '安静趴窗台上凝视...独自享受这个瞬间', value: 'I' }] },
  { icon: '🏥', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果带你去宠物医院打疫苗，你会？',
    options: [{ icon: '😿', text: '全程喵喵叫个不停！让所有人知道我不开心', value: 'E' }, { icon: '😑', text: '一声不吭缩在角落用沉默抗议', value: 'I' }] },
  { icon: '📦', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果面前有个新纸箱，你会？',
    options: [{ icon: '📣', text: '钻进去探出头来喵喵叫！快看我快看我', value: 'E' }, { icon: '📦', text: '悄悄钻进去躲着...把这里当秘密基地', value: 'I' }] },
  { icon: '🎉', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果铲屎官买了新玩具回来，你会？',
    options: [{ icon: '🏃', text: '立刻冲上去玩！不管好不好玩先试试', value: 'E' }, { icon: '🔍', text: '绕着玩具走三圈研究一下这是啥玩意儿', value: 'I' }] },
  { icon: '🛁', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果被迫洗澡的时候，你会？',
    options: [{ icon: '😾', text: '疯狂挣扎+惨叫！让全世界知道我在反抗', value: 'E' }, { icon: '💀', text: '身体僵硬一动不动用死亡眼神盯着铲屎官', value: 'I' }] },
  { icon: '🪞', tag: '🐱 猫猫第一人称', dim: 'EI', text: '如果偶然看到镜子里的自己，你会？',
    options: [{ icon: '😺', text: '对着镜子又拍又叫！那只猫好可爱是谁啊', value: 'E' }, { icon: '👁️', text: '眯眼仔细打量这家伙怎么跟我长得一样', value: 'I' }] },
  // S/N ×7
  { icon: '🐟', tag: '🐱 猫猫第一人称', dim: 'SN', text: '面前有熟悉鱼干和没见过的冻干，选哪个？',
    options: [{ icon: '🐟', text: '鱼干！吃过的才靠谱新的万一不好吃', value: 'S' }, { icon: '✨', text: '新品冻干看起来好特别想尝尝什么味道', value: 'N' }] },
  { icon: '🛋️', tag: '🐱 猫猫第一人称', dim: 'SN', text: '选午睡位置你最在意的是？',
    options: [{ icon: '☀️', text: '垫子摸起来最舒服温度刚刚好', value: 'S' }, { icon: '💭', text: '这角落感觉很有氛围能激发我的灵感', value: 'N' }] },
  { icon: '🎯', tag: '🐱 猫猫第一人称', dim: 'SN', text: '铲屎官拿出了激光笔，你的策略是？',
    options: [{ icon: '💨', text: '光点在哪就追到哪专注抓住每个瞬间', value: 'S' }, { icon: '🧠', text: '先观察光点的移动规律它在循环路线对吧', value: 'N' }] },
  { icon: '🍖', tag: '🐱 猫猫第一人称', dim: 'SN', text: '铲屎官给你做了造型奇怪的饭，你会？',
    options: [{ icon: '👃', text: '先闻闻味道嗯能吃就吃吧填饱肚子要紧', value: 'S' }, { icon: '❓', text: '这是什么为什么长这样铲屎官在想什么', value: 'N' }] },
  { icon: '🌙', tag: '🐱 猫猫第一人称', dim: 'SN', text: '半夜突然精力旺盛跑酷你在想什么？',
    options: [{ icon: '🏃', text: '就是想跑从沙发到柜子到床身体需要运动', value: 'S' }, { icon: '💫', text: '突然领悟了什么宇宙真理必须通过奔跑表达', value: 'N' }] },
  { icon: '🧀', tag: '🐱 猫猫第一人称', dim: 'SN', text: '发现桌上有一块你没见过的食物，你会？',
    options: [{ icon: '👅', text: '舔一口试试看直接体验比什么都准', value: 'S' }, { icon: '🔬', text: '先围绕它转一圈仔细分析成分和来源', value: 'N' }] },
  { icon: '🪑', tag: '🐱 猫猫第一人称', dim: 'SN', text: '铲屎官换了新沙发你对它的评价基于？',
    options: [{ icon: '✋', text: '爪感如何软不软抓起来舒不舒服', value: 'S' }, { icon: '🎨', text: '整体风格搭不搭配我的气质颜值在线吗', value: 'N' }] },
  // T/F ×8
  { icon: '😿', tag: '🐱 猫猫第一人称', dim: 'TF', text: '家里另一只猫被骂了在哭（喵），你会？',
    options: [{ icon: '🤗', text: '蹭蹭ta用尾巴卷住ta安慰感情最重要', value: 'F' }, { icon: '🧐', text: '站在旁边冷静分析ta到底做错了啥才挨骂', value: 'T' }] },
  { icon: '💊', tag: '🐱 猫猫第一人称', dim: 'TF', text: '生病要吃药藏在零食里发现后你会？',
    options: [{ icon: '💔', text: '虽然吃了但委屈巴巴看着铲屎官你怎么能骗我', value: 'F' }, { icon: '🤨', text: '行吧为了健康但下次换个口味骗我', value: 'T' }] },
  { icon: '🎒', tag: '🐱 猫猫第一人称', dim: 'TF', text: '铲屎官要出差把你寄养在朋友家分别时你会？',
    options: [{ icon: '😿', text: '一直喵喵叫不肯离开视线心里超难过', value: 'F' }, { icon: '😼', text: '淡定目送离开反正几天后就回来了', value: 'T' }] },
  { icon: '🩹', tag: '🐱 猫猫第一人称', dim: 'TF', text: '不小心摔下来受伤了铲屎官很自责你会？',
    options: [{ icon: '😽', text: '蹭蹭ta表示原谅～知道你不是故意的', value: 'F' }, { icon: '🤨', text: '是柜子太滑了不是你的错下次注意放稳一点', value: 'T' }] },
  { icon: '👶', tag: '🐱 猫猫第一人称', dim: 'TF', text: '家里来了个又哭又闹的小宝宝你会？',
    options: [{ icon: '🛡️', text: '虽然吵但还是乖乖待着不想让场面更混乱', value: 'F' }, { icon: '🚪', text: '立刻撤离现场这种低效率噪音环境不适合我', value: 'T' }] },
  { icon: '🎁', tag: '🐱 猫猫第一人称', dim: 'TF', text: '过生日收到一份你不喜欢的礼物你会？',
    options: [{ icon: '💝', text: '假装开心玩两下不忍心让铲屎官失望', value: 'F' }, { icon: '😐', text: '闻一下就走开不喜欢就是不喜欢诚实最重要', value: 'T' }] },
  { icon: '🐕', tag: '🐱 猫猫第一人称', dim: 'TF', text: '邻居家狗来串门它很想跟你玩你会？',
    options: [{ icon: '🙂', text: '虽然不太想理但也不凶别把气氛搞尴尬嘛', value: 'F' }, { icon: '😾', text: '哈它这是我地盘请你自己离开', value: 'T' }] },
  { icon: '🙆', tag: '🐱 猫猫第一人称', dim: 'TF', text: '铲屎官摸你摸到你不想继续了你会？',
    options: [{ icon: '🥺', text: '轻轻推开或用温柔的动作表达不忍心伤你', value: 'F' }, { icon: '✋', text: '直接走开或用手挡住界限分明', value: 'T' }] },
  // J/P ×7
  { icon: '☀️', tag: '🐱 猫猫第一人称', dim: 'JP', text: '每天早上醒来后的固定流程是？',
    options: [{ icon: '📋', text: '伸懒腰→吃饭→去窗台→睡觉顺序不能乱', value: 'J' }, { icon: '🎲', text: '看心情吧今天可能先去骚扰铲屎官也说不定', value: 'P' }] },
  { icon: '🎮', tag: '🐱 猫猫第一人称', dim: 'JP', text: '追捕一只虫子的时候你的风格是？',
    options: [{ icon: '🎯', text: '制定战术潜伏→靠近→猛扑一击必杀', value: 'J' }, { icon: '💨', text: '追着跑呗跑到哪算哪主打一个随缘', value: 'P' }] },
  { icon: '🛏️', tag: '🐱 猫猫第一人称', dim: 'JP', text: '晚上睡哪里通常是？',
    options: [{ icon: '🛏️', text: '我的专属位置每天都是那里雷打不动', value: 'J' }, { icon: '🌀', text: '今天沙发明天床后天也许试试铲屎官枕头', value: 'P' }] },
  { icon: '🧹', tag: '🐱 猫猫第一人称', dim: 'JP', text: '刚打扫完的房间地上有根逗猫棒你会？',
    options: [{ icon: '⏳', text: '等铲屎官收好了再玩不要破坏劳动成果', value: 'J' }, { icon: '🏃', text: '管他呢先玩再说玩完假装不知道', value: 'P' }] },
  { icon: '🥛', tag: '🐱 猫猫第一人称', dim: 'JP', text: '水盆快空了你会？',
    options: [{ icon: '🔔', text: '准时走到水盆旁喵喵叫该加水了', value: 'J' }, { icon: '💧', text: '渴了再说实在不行喝马桶盖上的水珠也行', value: 'P' }] },
  { icon: '🧶', tag: '🐱 猫猫第一人称', dim: 'JP', text: '面对一堆散落的玩具你会？',
    options: [{ icon: '📦', text: '挑最喜欢的一个认真玩专注才能快乐', value: 'J' }, { icon: '🎪', text: '每个都拨弄一下这个闻闻那个拍拍都好玩', value: 'P' }] },
  { icon: '🕐', tag: '🐱 猫猫第一人称', dim: 'JP', text: '到了平时吃饭时间但铲屎官还没来你会？',
    options: [{ icon: '⏰', text: '准时走到食盆前坐好到点了就要吃饭', value: 'J' }, { icon: '😴', text: '再等等吧或者先睡一觉饿了再去催', value: 'P' }] }
];

const OBS = [
  // E/I ×8
  { icon: '🚪', tag: '👀 铲屎官视角', dim: 'EI', text: '当你下班回家开门时，你家猫通常会？',
    options: [{ icon: '🏃', text: '立刻冲到门口迎接！围着腿蹭来蹭去超热情', value: 'E' }, { icon: '🛋', text: '慢悠悠抬起头看一眼然后继续躺着...', value: 'I' }] },
  { icon: '👥', tag: '👀 铲屎官视角', dim: 'EI', text: '当有客人来访时，你家猫的反应是？',
    options: [{ icon: '😺', text: '主动凑上去求撸！给每个人都展示魅力', value: 'E' }, { icon: '🙈', text: '直接消失或躲在暗处观察绝不露面', value: 'I' }] },
  { icon: '📱', tag: '👀 铲屎官视角', dim: 'EI', text: '当你拿出手机想给它拍照时，它会？',
    options: [{ icon: '📸', text: '对着镜头摆pose甚至主动凑过来卖萌', value: 'E' }, { icon: '🚶', text: '转身走开或者一脸嫌弃地看着你', value: 'I' }] },
  { icon: '🏠', tag: '👀 铲屎官视角', dim: 'EI', text: '搬到一个新家后，你家猫适应的方式是？',
    options: [{ icon: '🗺️', text: '到处巡视每个角落都要探索一遍才放心', value: 'E' }, { icon: '📦', text: '找一个安全的小角落躲起来慢慢适应', value: 'I' }] },
  { icon: '🎤', tag: '👀 铲屎官视角', dim: 'EI', text: '当你跟它说话时，它更倾向于？',
    options: [{ icon: '💬', text: '积极回应！用各种叫声跟你交流互动', value: 'E' }, { icon: '👂', text: '安静地听然后用眼神回应偶尔甩下尾巴', value: 'I' }] },
  { icon: '🍽️', tag: '👀 铲屎官视角', dim: 'EI', text: '到吃饭时间了但它还没开饭，它会？',
    options: [{ icon: '📣', text: '跟着你走到哪跟到哪喵喵叫催催催', value: 'E' }, { icon: '⏳', text: '安静坐在食盆前用眼神默默施压等你反应', value: 'I' }] },
  { icon: '🏥', tag: '👀 铲屎官视角', dim: 'EI', text: '带它出门（去医院/体检）时它的表现是？',
    options: [{ icon: '😿', text: '一路喵喵不停对外界一切充满好奇又紧张', value: 'E' }, { icon: '🧊', text: '缩在航空箱里一声不装死直到结束', value: 'I' }] },
  { icon: '✂️', tag: '👀 铲屎官视角', dim: 'EI', text: '给它剪指甲的时候它会？',
    options: [{ icon: '😾', text: '全程剧烈反抗+惨叫让全小区都知道', value: 'E' }, { icon: '💀', text: '身体僵住用冰冷的眼神默默承受', value: 'I' }] },
  // S/N ×7
  { icon: '🎁', tag: '👀 铲屎官视角', dim: 'SN', text: '当你买个新玩具回来时，它最先关注的是？',
    options: [{ icon: '👐', text: '能不能抓能不能咬好不好玩', value: 'S' }, { icon: '🤔', text: '这是个什么东西有什么隐藏机关吗', value: 'N' }] },
  { icon: '🍽️', tag: '👀 铲屎官视角', dim: 'SN', text: '换了新牌子的猫粮，它通常？',
    options: [{ icon: '👃', text: '先闻一闻味道对不对胃口才是关键', value: 'S' }, { icon: '❓', text: '绕着碗走三圈思考这和之前的有啥不同', value: 'N' }] },
  { icon: '📍', tag: '👀 铲屎官视角', dim: 'SN', text: '你家猫选睡觉位置最看重的是？',
    options: [{ icon: '☀️', text: '这个地方够不够舒服够不够暖和', value: 'S' }, { icon: '✨', text: '这里的光影氛围有没有艺术感', value: 'N' }] },
  { icon: '🔄', tag: '👀 铲屎官视角', dim: 'SN', text: '当你改变了家具的位置它通常会？',
    options: [{ icon: '🔍', text: '仔细检查一遍确认每样东西还在不在原位', value: 'S' }, { icon: '💭', text: '若有所思地端详新布局仿佛在解读某种信息', value: 'N' }] },
  { icon: '🧶', tag: '👀 铲屎官视角', dim: 'SN', text: '它玩逗猫棒的方式更多是？',
    options: [{ icon: '⚡', text: '光点在哪追到哪简单直接享受捕捉快感', value: 'S' }, { icon: '🧠', text: '会预判轨迹提前埋伏像个战术家', value: 'N' }] },
  { icon: '🪑', tag: '👀 铲屎官视角', dim: 'SN', text: '它对新买的沙发/毯子的判断基于？',
    options: [{ icon: '✋', text: '爪感如何好不好抓舒不舒服', value: 'S' }, { icon: '🎨', text: '颜值怎么样配不配得上本喵的气质', value: 'N' }] },
  { icon: '🍖', tag: '👀 铲屎官视角', dim: 'SN', text: '给它做了一顿特别的饭它的反应是？',
    options: [{ icon: '👅', text: '上来就吃好吃就行不用想太多', value: 'S' }, { icon: '🤨', text: '先研究一下这是啥然后决定要不要赏脸', value: 'N' }] },
  // T/F ×7
  { icon: '😿', tag: '👀 铲屎官视角', dim: 'TF', text: '当你难过或不开心时，你家猫会？',
    options: [{ icon: '😽', text: '靠过来蹭你或者静静陪着你安慰你', value: 'F' }, { icon: '🧐', text: '该干嘛干嘛但你情绪不对它会多看你几眼', value: 'T' }] },
  { icon: '🤒', tag: '👀 铲屎官视角', dim: 'TF', text: '当你生病卧床时，它通常会？',
    options: [{ icon: '💕', text: '守在床边陪你寸步不离像个小护士', value: 'F' }, { icon: '📋', text: '保持正常作息但在你能看到的地方待着', value: 'T' }] },
  { icon: '😾', tag: '👀 铲屎官视角', dim: 'TF', text: '如果不小心踩到它的尾巴它会更？',
    options: [{ icon: '💔', text: '委屈地叫一声然后躲起来需要时间治愈', value: 'F' }, { icon: '😾', text: '当场哈你或者用行动表示不满让你记住教训', value: 'T' }] },
  { icon: '👋', tag: '👀 铲屎官视角', dim: 'TF', text: '你要出差几天把它托付给别人时它表现？',
    options: [{ icon: '😿', text: '明显焦虑不安甚至绝食抗议', value: 'F' }, { icon: '😼', text: '有点不开心但很快接受现实调整状态', value: 'T' }] },
  { icon: '👶', tag: '👀 铲屎官视角', dim: 'TF', text: '家里有了新成员（另一只宠物/婴儿）它态度？',
    options: [{ icon: '🛡️', text: '虽然不爽但不会主动攻击尽量和谐相处', value: 'F' }, { icon: '⚖️', text: '先评估威胁等级再决定是接纳还是划清界限', value: 'T' }] },
  { icon: '💊', tag: '👀 铲屎官视角', dim: 'TF', text: '骗它吃药成功后发现被骗了它的反应？',
    options: [{ icon: '💔', text: '用受伤的眼神看着你久久不能释怀', value: 'F' }, { icon: '🤨', text: '冷笑一声行下次注意然后翻篇了', value: 'T' }] },
  { icon: '🎄', tag: '👀 铲屎官视角', dim: 'TF', text: '过节期间家里装饰变了它的适应方式？',
    options: [{ icon: '🎀', text: '小心翼翼地避开装饰物怕碰倒了挨骂', value: 'F' }, { icon: '🔍', text: '快速扫描一遍新布局建立新的活动路线图', value: 'T' }] },
  // J/P ×8
  { icon: '🕐', tag: '👀 铲屎官视角', dim: 'JP', text: '你家猫每天吃饭时间的准点是？',
    options: [{ icon: '⏰', text: '分秒不差！晚一分钟就开始催你了', value: 'J' }, { icon: '🎰', text: '大概那个时间段吧早一点晚一点都无所谓', value: 'P' }] },
  { icon: '🛏️', tag: '👀 铲屎官视角', dim: 'JP', text: '你家猫每晚睡觉的位置通常是？',
    options: [{ icon: '📍', text: '固定的那个位子每天都在那里', value: 'J' }, { icon: '🎲', text: '今天沙发上明天床上随心情而定', value: 'P' }] },
  { icon: '🧹', tag: '👀 铲屎官视角', dim: 'JP', text: '刚收拾好的房间它会？',
    options: [{ icon: '📝', text: '保持整洁顶多在自己区域稍微活动', value: 'J' }, { icon: '🌀', text: '十分钟内让房间恢复\'猫该有的样子\'', value: 'P' }] },
  { icon: '🎯', tag: '👀 铲屎官视角', dim: 'JP', text: '它玩耍的风格更偏向？',
    options: [{ icon: '📋', text: '有计划性地进行比如先玩这个再玩那个', value: 'J' }, { icon: '🎪', text: '完全随机看到啥玩啥想到啥玩啥', value: 'P' }] },
  { icon: '🚽', tag: '👀 铲屎官视角', dim: 'JP', text: '关于上厕所它习惯于？',
    options: [{ icon: '🏠', text: '固定的时间和固定的猫砂盆位置', value: 'J' }, { icon: '🎰', text: '哪个顺手上哪个时间也看心情', value: 'P' }] },
  { icon: '📦', tag: '👀 铲屎官视角', dim: 'JP', text: '快递箱子拆开后它处理的方式是？',
    options: [{ icon: '📦', text: '仔细检查后放到自己的\'收藏区\'', value: 'J' }, { icon: '🎊', text: '立刻钻进去然后开始疯狂撕扯破坏', value: 'P' }] },
  { icon: '🌙', tag: '👀 铲屎官视角', dim: 'JP', text: '半夜它跑酷的时间和方式？',
    options: [{ icon: '📅', text: '差不多固定的时间段按固定路线跑', value: 'J' }, { icon: '🎲', text: '随时可能开始没有任何规律可循', value: 'P' }] },
  { icon: '💤', tag: '👀 铲屎官视角', dim: 'JP', text: '周末vs工作日它的作息有明显差别吗？',
    options: [{ icon: '📅', text: '几乎一样！规律就是力量', value: 'J' }, { icon: '🎲', text: '完全看心情今天可能凌晨3点才开始嗨', value: 'P' }] }
];

// ============================================================
// 16种猫型结果
// ============================================================
const CAT_TYPES = {
  INTJ: { name: '战略猫咪 🎩', slogan: '「我在计划如何统治这个世界...先从这罐罐头开始」', emoji: '😼', desc: '你是猫界的智囊担当。总是一脸高深莫测地坐在高处俯视众生。其实你只是在盘算下一顿什么时候开饭。', traits: ['高冷外表热心肠', '计划控', '洞察力MAX', '暗地里观察一切'] },
  INTP: { name: '哲学家猫咪 🔭', slogan: '「如果薛定谔的盒子里装的是猫粮...」', emoji: '🙀', desc: '永远在想\'为什么\'的猫。大脑里住着一整个宇宙经常发呆被误以为在思考人生。', traits: ['脑洞超大', '好奇心爆棚', '拖延症晚期', '夜猫子体质'] },
  ENTJ: { name: 'CEO猫咪 👔', slogan: '「本喵说了算。现在给我开饭。」', emoji: '😾', desc: '天生的领袖猫。家里的一切都在你的掌控之中你有强大的气场。', traits: ['气场两米八', '决策果断', '目标导向', '控制欲略强'] },
  ENTP: { name: '捣蛋鬼猫咪 😈', slogan: '「我只是想知道...如果把水杯推下去会怎样？」', emoji: '😹', desc: '家里的混乱制造机。推倒东西不是坏纯粹想看看会发生什么。可爱到让人舍不得骂。', traits: ['脑回路清奇', '热爱辩论', '恶作剧天才', '口才一流'] },
  INFJ: { name: '治愈系猫咪 💜', slogan: '「我知道你今天过得不好...过来让我蹭蹭你」', emoji: '🐱‍👤', desc: '能感知所有情绪。主人难过时安静靠旁开心时一起蹦跶内心有个温暖的小宇宙。', traits: ['超级敏感', '共情能力MAX', '温柔有深度', '神秘又迷人'] },
  INFP: { name: '梦想家猫咪 ☁️', slogan: '「窗外的那朵云长得好像一条小鱼干...」', emoji: '😸', desc: '活在童话世界的猫。每缕阳光都有故事经常望着窗外发呆追求美好讨厌冲突。', traits: ['浪漫主义', '富有想象力', '真诚善良', '有点小敏感'] },
  ENFJ: { name: '社交名媛猫咪 🎀', slogan: '「大家都来玩呀！没有人应该孤单！」', emoji: '😻', desc: '聚会C位！走到哪都是焦点不只是自己开心还热衷让每个人都融入进来。', traits: ['人气王', '热情洋溢', '照顾全局', '天生领导力'] },
  ENFP: { name: '快乐修猫咪 🌈', slogan: '「哇！！新的一天！！好多事要做！！好兴奋！！」', emoji: '🐱‍🚀', desc: '行走的快乐源泉！每天醒来像打了鸡血笑声具有传染力能让整个屋子明亮。', traits: ['精力无限', '创意达人', '乐观积极', '三分钟热度'] },
  ISTJ: { name: '规矩猫咪 📋', slogan: '「六点半开饭七点睡觉这是规矩。」', emoji: '😺', desc: '非常有原则的猫日程表严格任何破坏routine的行为都会让你不满。可靠守时说到做到。', traits: ['极其靠谱', '有条有理', '责任感强', '轻微强迫症'] },
  ISFJ: { name: '守护天使猫咪 🛡️', slogan: '「我一直在这里你需要我的时候回头就好。」', emoji: '🐱', desc: '最温柔的陪伴者默默守在主人身边从不离开会让每个人都说\'我家猫最好\'。', traits: ['温柔体贴', '默默付出', '细节满分', '超级忠诚'] },
  ESTJ: { name: '管家猫咪 🔑', slogan: '「根据我的统计本周你已经迟喂我三次了。」', emoji: '😼', desc: '家里的实际管理者对一切事务了如指掌用效率和秩序维持家庭运转。', traits: ['效率至上', '井井有条', '执行力强', '直言不讳'] },
  ESFJ: { name: '暖炉猫咪 🧡', slogan: '「快来！我给你留了好位置！暖暖的超舒服～」', emoji: '😽', desc: '行走的小暖炉最大愿望让每个人都感到舒适和被爱存在本身就让世界变温暖。', traits: ['贴心小棉袄', '合群', '乐于助人', '传统而温暖'] },
  ISTP: { name: '酷盖猫咪 😎', slogan: '「...」', emoji: '😏', desc: '最酷的话不多但每个动作都帅得不行独立自主不需要任何人照顾。', traits: ['冷静淡定', '动手能力强', '独立自主', '酷到没朋友'] },
  ISFP: { name: '艺术家猫咪 🎨', slogan: '「这片光影...美得我想睡在上面」', emoji: '🐈', desc: '对美有执念的猫睡觉位置光线最好走路姿势优雅打哈欠都有艺术感。', traits: ['审美在线', '随性自由', '敏感细腻', '活在当下'] },
  ESTP: { name: '冒险家猫咪 🎢', slogan: '「那个柜顶...我觉得我能跳上去看着吧！」', emoji: '🐱‍👓', desc: '极限运动选手没有去不了的地方没有不敢尝试的事活力四射喜欢刺激。', traits: ['胆大包天', '行动派', '适应力强', '乐天派'] },
  ESFP: { name: '派对猫咪 🎉', slogan: '「大家看我！！！快看我！！！！」', emoji: '🎪', desc: '聚会绝对主角有你就不会冷场表演欲极强快乐就是信仰。', traits: ['表现力MAX', '活泼开朗', '现充', '气氛组担当'] }
};

// ============================================================
// 匹配度计算
// ============================================================
function calcMatch(humanMBTI, catMBTI) {
  let sameCount = 0;
  for (let i = 0; i < 4; i++) {
    if (humanMBTI[i] === catMBTI[i]) sameCount++;
  }
  const base = 55 + sameCount * 8 + Math.floor(Math.random() * 12);
  const score = Math.min(98, Math.max(42, base));

  let level, levelColor, matchDesc;

  if (score >= 90) {
    level = '🌟 天生一对 Soulmates';
    levelColor = '#FF6B9D';
    matchDesc = '你们之间的默契已经超越了物种！这只猫简直是你灵魂的毛绒版化身。建议立即签订终身陪伴契约。';
  } else if (score >= 80) {
    level = '💕 高度契合 最佳拍档';
    levelColor = '#f687b3';
    matchDesc = '你和这只猫的相处模式非常自然舒适！你们在很多方面想法一致即使偶有小摩擦也能快速化解。';
  } else if (score >= 70) {
    level = '🐾 相互吸引 默契不错';
    levelColor = '#9f7aea';
    matchDesc = '你们的性格有相似之处也有互补的地方有时候你觉得它很懂你有时候又觉得它来自另一个星球——这正是有趣之处！';
  } else if (score >= 60) {
    level = '🤝 和平共处 各有各的活法';
    levelColor = '#4299e1';
    matchDesc = '你们保持着一种微妙的平衡不是每时每刻都同步但各自安好互相尊重。学会欣赏对方的不同才是长久之道。';
  } else if (score >= 50) {
    level = '😹 有趣的反差萌';
    levelColor = '#ed8936';
    matchDesc = '说实话你们差别挺大的！但反差也是魅力所在它做一些让你无法理解的事你也做一些让它费解的事——互相围观对方的迷惑行为也挺快乐的。';
  } else {
    level = '🌀 跨物种沟通挑战赛';
    levelColor = '#a0aec0';
    matchDesc = '你们基本上生活在两个平行世界...但别灰心！最有趣的组合往往诞生于最大的差异中试着用它的语言理解这个世界吧！';
  }

  return { score, level, levelColor, matchDesc };
}

// ============================================================
// 工具函数
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, count) {
  return shuffle(arr).slice(0, count);
}

// ============================================================
// Page 实例
// ============================================================
Page({
  data: {
    currentPage: 'home',

    // MBTI 选择
    selEI: '',
    selSN: '',
    selTF: '',
    selJP: '',
    mbtiPreview: '____',
    canConfirm: false,

    // 答题
    currentQ: 0,
    totalQ: 24,
    progressPercent: 0,
    currentQuestion: {},
    quizQuestions: [],

    // 分数
    scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },

    // 结果
    humanMBTI: '',
    catMBTI: '',
    catTypeData: {},
    matchResult: {},
    dimensions: []
  },

  // ---------- 页面导航 ----------
  goToInput() {
    this.setData({ currentPage: 'input' });
  },

  // ---------- MBTI 维度选择 ----------
  selectDim(e) {
    const dim = e.currentTarget.dataset.dim;
    const val = e.currentTarget.dataset.val;
    const update = {};
    update['sel' + dim] = val;
    this.setData(update);
    this._updatePreview();
  },

  _updatePreview() {
    const { selEI, selSN, selTF, selJP } = this.data;
    const mbti = (selEI || '_') + (selSN || '_') + (selTF || '_') + (selJP || '_');
    this.setData({
      mbtiPreview: mbti,
      canConfirm: !mbti.includes('_')
    });
  },

  confirmMBTI() {
    const { selEI, selSN, selTF, selJP } = this.data;
    const humanMBTI = selEI + selSN + selTF + selJP;
    this.data.humanMBTI = humanMBTI; // 保存供结果页使用
    this._startQuiz();
  },

  // ---------- 开始测试 ----------
  _startQuiz() {
    const catQuestions = pickRandom(CAT_POV, 12);
    const ownerQuestions = pickRandom(OBS, 12);

    // 交叉合并再打乱
    let merged = [];
    for (let i = 0; i < 12; i++) {
      merged.push(catQuestions[i], ownerQuestions[i]);
    }
    merged = shuffle(merged);

    this.setData({
      currentPage: 'quiz',
      quizQuestions: merged,
      totalQ: merged.length,
      currentQ: 0,
      scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
    });

    this._renderQuestion();
  },

  _renderQuestion() {
    const q = this.data.quizQuestions[this.data.currentQ];
    this.setData({
      currentQuestion: q,
      progressPercent: (this.data.currentQ / this.data.totalQ * 100)
    });
  },

  // ---------- 选择答案 ----------
  selectAnswer(e) {
    const val = e.currentTarget.dataset.value;
    const scores = { ...this.data.scores };
    scores[val]++;
    
    this.setData({ scores });

    // 简单的点击动画反馈
    wx.vibrateShort({ type: 'light' });

    if (this.data.currentQ < this.data.totalQ - 1) {
      this.setData({ currentQ: this.data.currentQ + 1 });
      this._renderQuestion();
    } else {
      this._showResult();
    }
  },

  // ---------- 显示结果 ----------
  _showResult() {
    const s = this.data.scores;
    const catMBTI =
      (s.E >= s.I ? 'E' : 'I') +
      (s.S >= s.N ? 'S' : 'N') +
      (s.T >= s.F ? 'T' : 'F') +
      (s.J >= s.P ? 'J' : 'P');

    const humanMBTI = this.data.humanMBTI;
    const catTypeData = CAT_TYPES[catMBTI];
    const matchResult = calcMatch(humanMBTI, catMBTI);

    const dimensions = [
      { label: '能量来源', value: s.E >= s.I ? `外向 E(${s.E})` : `内向 I(${s.I})` },
      { label: '认知方式', value: s.S >= s.N ? `实感 S(${s.S})` : `直觉 N(${s.N})` },
      { label: '判断方式', value: s.T >= s.F ? `思考 T(${s.T})` : `情感 F(${s.F})` },
      { label: '生活方式', value: s.J >= s.P ? `判断 J(${s.J})` : `感知 P(${s.P})` }
    ];

    this.setData({
      currentPage: 'result',
      humanMBTI,
      catMBTI,
      catTypeData,
      matchResult,
      dimensions
    });

    // 撒花动画效果（通过震动模拟庆祝）
    setTimeout(() => {
      wx.vibrateShort({ type: 'medium' });
    }, 300);
  },

  // ---------- 重新测试 ----------
  reTest() {
    this.setData({
      currentPage: 'home',
      selEI: '', selSN: '', selTF: '', selJP: '',
      mbtiPreview: '____',
      canConfirm: false,
      humanMBTI: ''
    });
  },

  // ---------- 分享（必须实现） ----------
  onShareAppMessage() {
    const { humanMBTI, catMBTI, catTypeData, matchResult } = this.data;
    return {
      title: `我是 ${humanMBTI} × 家猫是 ${catMBTI} (${catTypeData.name}) 契合度${matchResult.score}%`,
      path: '/pages/index/index',
      imageUrl: '' // 可以后续替换为分享卡片图
    };
  },

  onShareTimeline() {
    return {
      title: '🐱 Cati人猫契合度测试 - 测测你和猫的契合度！'
    };
  }
});
