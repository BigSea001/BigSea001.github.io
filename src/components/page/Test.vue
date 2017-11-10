<template>
  <div>
    <form id="formCart" name="formCart" method="post" action="flow.php" style="width:1190px; margin:0 auto;">
      <table>
        <tbody>
        <tr>
          <th class="select-all J_SelectAll" bgcolor="#ffffff" style="text-align:left; margin-left:5px;"></th>
          <th bgcolor="#ffffff" colspan="2" style="width:215px; text-align:left">商品名称</th>
          <th bgcolor="#ffffff" colspan="2" style="width:139px; text-align:left">商品属性</th>
          <th bgcolor="#ffffff" style="text-align: left;" width="100">单价(元)</th>
          <th class="select-all J_SelectAll" bgcolor="#ffffff"
              style="text-align:left; margin-left:5px; width: 103px;"></th>
          <th bgcolor="#ffffff" style="text-align: left;" width="150">数量</th>
          <th bgcolor="#ffffff" style="text-align: left;" width="168">金额(元)</th>
          <th bgcolor="#ffffff" style="" width="50">操作</th>
        </tr>
        </tbody>
      </table>
      <table width="100%" style="border:#ccc solid 1px">
        <tbody>
        <tr id="tr_goods_786" class="cartList" style="border:#f00 solid 1px;">
          <td bgcolor="#ffffff" class="nstep_pbox" style="width:335px;"><p class="f_l"><a
            href="goods-12664-UGG 新款保暖舒适童鞋雪地靴 1017703.html" target="_blank"><img
            src="http://static.meistreet.com/images/20170907/thumb_img/G12664/12664_thumb_G_89_G12664_0_70768600.jpg"
            data-original="http://static.meistreet.com/images/20170907/thumb_img/G12664/12664_thumb_G_89_G12664_0_70768600.jpg"
            border="0" title="UGG 新款保暖舒适童鞋雪地靴 1017703" width="80" height="80" style="display: block;"></a></p>
            <p class="nstep_name"><a href="goods-12664-UGG 新款保暖舒适童鞋雪地靴 1017703.html" target="_blank" class="f6">UGG 新款保暖舒适童鞋雪地靴 1017703</a>
            </p></td>
          <td style="width:172px;"><p class="sku-line" style="line-height:24px; color:#9c9c9c">资源:美国仓(北加州) <br>
            颜色:栗子 <br>
            尺寸:T 6 <br></p></td>
          <td bgcolor="#ffffff"><p class="price-line"><em class="price-original">￥<span>1,005.59</span></em></p>
            <p class="price-line"><em class="price-now">￥<span>838.00</span></em></p></td>
          <td bgcolor="#ffffff" style="width:160px">
            <div class="item-amount"><a  href="javascript:void(0)" onclick="changenum(786,1)" class="add">+</a><input
              type="text" name="goods_number[786]" id="goods_number_786" value="1" size="1" class="shuliang"
              style="text-align:center "  ="" onchange="change_goods_number(786,this.value)"><a
              href="javascript:void(0)" onclick="changenum(786,-1)" class="sub">-</a></div>
          </td>
          <td bgcolor="#ffffff" id="goods_subtotal_786" class="chkprice ">￥<span>838.00</span></td>
          <td bgcolor="#ffffff"><a
            href="javascript:if (confirm('您确实要把该商品移出购物车吗？')) location.href='flow.php?step=drop_goods&amp;id=786';"
            style=" display:block; text-align:center">删除</a><a
            href="javascript:if (confirm('您确实要把该商品移出购物车吗？')) location.href='flow.php?step=drop_to_collect&amp;id=786';"
            style=" display:block;text-align:center">放入收藏夹</a></td>
        </tr>
        </tbody>
      </table>
      <table width="100%">
        <tbody>
        <tr>
          <td bgcolor="#ffffff" id="total_desc" class="nstep1_count">
            <div class="float-bar-wrapper">
              <div class="btn-area"><a class="submit-btns" href="flow.php?step=checkout">结算</a></div>
              <div class="price-sum">

                商品总价：<b>￥<span>838.00</span></b></div>
            </div>
          </td>
        </tr>
        </tbody>
      </table><!-- <input type="hidden" name="step" value="update_cart" />-->
    </form>

  </div>
</template>
<script>
  export default {
    methods: {}
  };
</script>

<style scoped>
</style>
